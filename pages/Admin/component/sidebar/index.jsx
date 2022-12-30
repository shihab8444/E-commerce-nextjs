import styles from './slidebar.module.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import StoreIcon from '@mui/icons-material/Store'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import Link from 'next/link'
const index = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <DashboardIcon className='text-slate-900' />
        <span>Dashboard</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>LISTS</p>

          <li>
            <PersonOutlineIcon className='text-green-900' />
            <Link href='/Admin/page/list' style={{ textDecoration: 'none' }}>
              <span>Users</span>
            </Link>
          </li>

          <li>
            <StoreIcon className='text-cyan-700' />
            <span>Products</span>
          </li>

          <li>
            <CreditCardIcon className='text-slate-900' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='text-blue-900' />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className='text-slate-900' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='text-red-600' />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='text-slate-900' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='text-green-400' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='text-blue-500' />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className='text-orange-300' />
            <Link href='/Admin/page/single' style={{ textDecoration: 'none' }}>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <ExitToAppIcon className='text-red-500' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default index
