import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className=' next ' onClick={onClick}>
      <button className='next right--5  absolute top-1/2 w-12 h-12 leading-10 bg-cyan-200 text-lg transition text-slate-600 rounded-r-lg transform z-10 cursor-pointer hover:bg-slate-500 hover:text-white'>
        <ArrowForwardIosIcon />
      </button>
    </div>
  )
}
export default SampleNextArrow
