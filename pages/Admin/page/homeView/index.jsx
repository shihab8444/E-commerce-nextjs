import styles from './home.module.scss'
import React from 'react'
import Sidebar from '../../component/sidebar'
import Navbar from '../../component/navbar'
import Widget from '../../component/widget'
import Featured from '../../component/featured'
import Chart from '../../component/chart'
import Table from '../../component/table'
function index() {
  return (
    <>
      <div className={styles.home}>
        <Sidebar />
        <div className={styles.homeContainer}>
          <Navbar />
          <div className={styles.widgets}>
            <Widget type='user' />
            <Widget type='order' />
            <Widget type='earning' />
            <Widget type='balance' />
          </div>
          <div className={styles.charts}>
            <Featured />
            <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} />
          </div>
          <div className={styles.listContainer}>
            <div className={styles.listTitle}>Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
