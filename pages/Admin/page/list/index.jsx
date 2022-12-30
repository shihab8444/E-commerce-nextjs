import styles from './list.module.scss'
import React from 'react'
import Navbar from '../../component/navbar'
import Sidebar from '../../component/sidebar'
import Datatable from '../../component/datatable'

function index() {
  return (
    <>
      <div className={styles.list}>
        <Sidebar />
        <div className={styles.listContainer}>
          <Navbar />
          <Datatable />
        </div>
      </div>
    </>
  )
}

export default index
