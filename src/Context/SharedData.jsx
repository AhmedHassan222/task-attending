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
            const customersRes = await axios.get('http://localhost:5000/customers');
            const transactionsRes = await axios.get('http://localhost:5000/transactions');
            setCustomers(customersRes.data);
            setTransactions(transactionsRes.data);
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