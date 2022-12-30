import styles from './navbar.module.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'
const index = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className='home flex font-bold text-2xl text-green-400 '>
          <Link href={'/'}>
            <HomeIcon />
          </Link>
        </div>
        <div className={styles.search}>
          <input
            type='text'
            className='border-spacing-10 pr-14'
            placeholder='Search...'
          />
          <SearchOutlinedIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageOutlinedIcon className={styles.icon} />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon
              className={styles.icon}
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className={styles.item}>
            <FullscreenExitOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ListOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <img src='/assets/onepiece.jpg' alt='' className={styles.avatar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
