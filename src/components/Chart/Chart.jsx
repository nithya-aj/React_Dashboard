import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts";

const Chart = ({ transactions }) => {

    const amtDifference = transactions.reduce((balance, transaction) => {
        const { month, debit, credit } = transaction;
        if (!balance[month]) {
            balance[month] = 0;
        }
        balance[month] += debit - credit;
        return balance;
    }, {});

    const sortedMonth = Object.entries(amtDifference)
        .map(([month, balance]) => ({ month, balance }))
        .sort((a, b) => {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return months.indexOf(a.month) - months.indexOf(b.month);
        });

    let balanceAmt = 0;
    const accBalance = sortedMonth.map(({ month, balance }) => {
        balanceAmt += balance;
        return { month, balance: balanceAmt };
    });

    console.log(accBalance);

    const data = accBalance.map(item => ({
        name: item.month,
        balance: item.balance
    }));

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