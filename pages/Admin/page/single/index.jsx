import styles from './single.module.scss'
import React from 'react'
import Sidebar from '../../component/sidebar'
import Navbar from '../../component/navbar'
import Chart from '../../component/chart'
import List from '../../component/table'

function index() {
  return (
    <div className={styles.single}>
      <Sidebar />
      <div className={styles.singleContainer}>
        <Navbar />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.editButton}>Edit</div>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img src='/assets/shihab.jpg' alt='' className={styles.itemImg} />
              <div className={styles.details}>
                <h1 className={styles.itemTitle}>Jane Doe</h1>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Email:</span>
                  <span className={styles.itemValue}>shihab1234@gmail.com</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Phone:</span>
                  <span className={styles.itemKey}>+880123456789</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Address:</span>
                  <span className={styles.itemValue}>dhaka,tikatuli</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Country:</span>
                  <span className={styles.itemValue}>Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Chart aspect={3 / 1} title='User Spending ( Last 6 Months)' />
          </div>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default index
