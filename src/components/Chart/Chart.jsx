import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";

const Chart = ({ transactions }) => {
    const monthlyBalance = transactions.reduce((balance, transactions) => {
        const { month, debit, credit } = transactions
        if (!balance[month]) {
            balance[month] = 0
        }
        balance[month] += debit - credit
        return balance
    }, {})
    console.log(monthlyBalance, 'monthlyBalance');

    const data = Object.entries(monthlyBalance).map(([month, balance]) => ({
        name: month,
        balance: balance
    }))

    return (
        <>
            <h5 style={{ textAlign: 'center', color: "gray" }}>Account Balance</h5>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="balance" fill="#82ca9d" />
            </BarChart>
        </>
    )
}

export default Chart