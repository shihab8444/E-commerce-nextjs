import styles from './new.module.scss'
import Sidebar from '../../component/sidebar'
import Navbar from '../../component/navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useState } from 'react'
import { UserInputs } from './form'
function index() {
  const [file, setFile] = useState('')

  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles.newContainer}>
        <Navbar />
        <div className={styles.top}>
          <h1>New User</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=''
            />
          </div>
          <div className={styles.right}>
            <form>
              <div className={styles.formInput}>
                <label htmlFor='file'>
                  Image:{' '}
                  <DriveFolderUploadOutlinedIcon className={styles.icon} />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {UserInputs.map((input) => (
                <div className={styles.formInput} key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
