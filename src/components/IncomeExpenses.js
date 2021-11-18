import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const total = amounts.reduce(reducer, 0).toFixed(2)
 
    const income = amounts
        .filter(item => item > 0)
        .reduce((previousValue, currentValue) => (previousValue += currentValue), 0)
        .toFixed(2);
    const expense = (
        amounts
        .filter(item => item < 0)
        .reduce((previousValue, currentValue) => (previousValue += currentValue), 0) * -1
    ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
        )
}
