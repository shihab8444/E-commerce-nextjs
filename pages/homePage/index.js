import Navbar from './navbar'
import Slider from './slider'
import styles from './homepage.module.scss'
import FlashCard from './flashCards'
import Data from './data'

function index() {
  const { productItems } = Data

  return (
    <>
      <div className='home bg-slate-200'>
        <Navbar />
        <Slider />
        <FlashCard productItems={productItems} />
      </div>
    </>
  )
}

export default index
