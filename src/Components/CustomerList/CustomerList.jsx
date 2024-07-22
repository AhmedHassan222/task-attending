// src/CustomerList.js
import React, { useContext, useEffect, useState } from 'react';
import { SharedData } from '../../Context/SharedData';
function CustomerList() {
    const { transactions, filter, setFilter, amountFilter, setAmountFilter, setSelectedCustomerId, filteredCustomers, selectedCustomerTransactions } = useContext(SharedData)
    return <>
        <div>
            <h3 className='my-4 text-center'>Customer Transactions</h3>
            <div className="d-flex">
                <input className='border-primary p-2  me-3' type="text" placeholder="Filter by name" value={filter} onChange={e => setFilter(e.target.value)} />
                <input className='border-primary p-2 ' type="number" placeholder="Filter by amount" value={amountFilter} onChange={e => setAmountFilter(e.target.value)} />
            </div>
            <table className='table table-striped text-center my-5 border border-primary'>
                <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Data</th>
                        <th scope="col">Amout</th>
                        <th scope="col">Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.length === 0 ? <div className='p-3'>No Customers maching</div> : filteredCustomers.map((customer, index) => (
                        <tr key={index} >
                            <td >{customer.name}</td>
                            <td >
                                {transactions
                                    .filter((transaction) => Number(transaction.customer_id) === Number(customer.id))
                                    .filter((transaction) => !amountFilter || transaction.amount >= amountFilter)
                                    .map((transaction, index) => <div key={index}> {transaction.date}</div>)
                                }
                            </td>
                            <td >
                                {transactions
                                    .filter((transaction) => Number(transaction.customer_id) === Number(customer.id))
                                    .filter((transaction) => !amountFilter || transaction.amount >= amountFilter)
                                    .map((transaction, index) => <div key={index} >{transaction.amount} $</div>)
                                }
                            </td>
                            <td >
                                <button onClick={() => {
                                    setSelectedCustomerId(customer.id);
                                }} className='btn btn-primary btn-sm'>Show Graph</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}

export default CustomerList;

