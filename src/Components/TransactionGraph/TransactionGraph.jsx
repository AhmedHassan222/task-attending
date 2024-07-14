import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { SharedData } from '../../Context/SharedData';
// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const TransactionGraph = () => {
  const { selectedCustomerTransactions } = useContext(SharedData)
  // Process data to extract labels and values
  const labels = selectedCustomerTransactions.map(t => t.date);
  const dataValues = selectedCustomerTransactions.map(t => t.amount);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Transaction Amount',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Transaction Amounts',
      },
    },
  };
  return <>
    <div className=''>
      <h3 className="my-4 text-center">Transactions Graph</h3>
      <Bar data={data} options={options} />
    </div>

  </>
};

export default TransactionGraph;
