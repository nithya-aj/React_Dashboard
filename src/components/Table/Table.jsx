import React from 'react'

const Table = ({ transactions }) => {
    const accountTotal = transactions.reduce((acc, transaction) => {
        const { account, debit, credit } = transaction
        if (!acc[account]) {
            acc[account] = { debit: 0, credit: 0 }
        }
        acc[account].debit = acc[account].debit + debit
        acc[account].credit = acc[account].credit + credit
        return acc
    }, {})
    console.log(accountTotal);
    const data = Object.entries(accountTotal)
    return (
        <table style={{ width: '100%' }} border="2">
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Debit</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                {data.map(([account, { debit, credit }]) => (
                    <tr key={account}>
                        <td>{account}</td>
                        <td>{debit}/-</td>
                        <td>{credit}/-</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
