import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import './layout.css'
import Chart from '../Chart/Chart'
import Table from '../Table/Table'

const Layout = () => {
  const transactions = [
    { id: 1, account: 'Sales', debit: 25000, credit: 0, month: 'Aug' },
    { id: 2, account: 'Sales', debit: 65000, credit: 0, month: 'Sep' },
    { id: 3, account: 'Sales', debit: 52000, credit: 0, month: 'Aug' },
    { id: 4, account: 'Bank', debit: 0, credit: 25000, month: 'Aug' },
    { id: 5, account: 'Purchase', debit: 0, credit: 6500, month: 'Sep' },
    { id: 6, account: 'Purchase', debit: 5000, credit: 25000, month: 'Dec' },
    { id: 7, account: 'Asset', debit: 1000, credit: 0, month: 'Dec' },
    { id: 8, account: 'Purchase', debit: 0, credit: 1200, month: 'Nov' }
  ]

  return (
    <div className="layout">
      <Sidebar></Sidebar>
      <div className="main__layout">
        <TopNav></TopNav>
        <div className="content">
          <h2>Accounts Dashboard</h2>
          <div className="row">
            <div className="column">
              <Table transactions={transactions} />
            </div>
            <div className="column">
              <Chart transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout


