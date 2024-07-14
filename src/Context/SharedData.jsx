import axios from "axios";
import { createContext, useEffect, useState } from "react"
export let SharedData = createContext(0)
function SharedDataProvide(props) {
    //Variable
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    //Fech Data From API (Json-sever)
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('https://json-server-data-wine.vercel.app/db.json');
            setCustomers(data.customers);
            setTransactions(data.transactions);
        };
        fetchData();
    }, []);
    // -------------------------------------------
    // -------------------------------------------
    // Variable
    const [filter, setFilter] = useState('');
    const [amountFilter, setAmountFilter] = useState('');
    const [selectedCustomerId, setSelectedCustomerId] = useState();
    const filteredCustomers = customers.filter(customer => customer.name.toLowerCase().includes(filter.toLowerCase()));
    const selectedCustomerTransactions = transactions
        .filter(transaction => Number(transaction.customer_id) === Number(selectedCustomerId))
        .filter(transaction => !amountFilter || transaction.amount >= amountFilter);
    // -------------------------------------------
    // -------------------------------------------
    return <SharedData.Provider value={{ customers, transactions, filter, setFilter, amountFilter, setAmountFilter, setSelectedCustomerId, filteredCustomers, selectedCustomerTransactions }}>
        {props.children}
    </SharedData.Provider>
}
export default SharedDataProvide;