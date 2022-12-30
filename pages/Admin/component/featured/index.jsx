import styles from './features.module.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'

function index() {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Revenue</h1>
        <MoreVertIcon fontSize={styles.small} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className={styles.title}>Total sales made today</p>
        <p className={styles.amount}>$420</p>
        <p className={styles.desc}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={styles.itemResult}>
              <div className='negative  text-red-500 flex'>
                <KeyboardArrowDownIcon fontSize='small' />
                <div className='resultAmount'>$12.4k</div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={styles.itemResult}>
              <div className='positive  text-green-500 flex'>
                <KeyboardArrowUpOutlinedIcon fontSize='small' />
                <div className='resultAmount'>$12.4k</div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={styles.itemResult}>
              <div className='positive  text-green-500 flex'>
                <KeyboardArrowUpOutlinedIcon fontSize='small' />
                <div className='resultAmount'>$12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
