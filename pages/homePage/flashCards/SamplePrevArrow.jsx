import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div onClick={onClick} className=''>
      <button className='prev left--5 absolute top-1/2 w-12 h-12 leading-10 bg-white text-lg transition text-slate-600 rounded-r-lg transform z-10 cursor-pointer hover:bg-slate-500 hover:text-white'>
        <ArrowBackIosNewIcon />
      </button>
    </div>
  )
}
export default SamplePrevArrow
