import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import SamplePrevArrow from './SamplePrevArrow'
import SampleNextArrow from './SampleNextArrow'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import AddIcon from '@mui/icons-material/Add'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const index = ({ productItems }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <div className='new  pl-28 pr-44 w-full  bg-white shadow-lg '>
        <h1 className='text-red-700 mt-8 font-semibold pl-10  pt-4 text-2xl '>
          New Ariival!
        </h1>
        <Slider {...settings}>
          {productItems.map((productItems, index) => {
            return (
              <div className='box ' key={index}>
                <div className='mt-5 border justify-between shadow-lg relative p-5  bg-white '>
                  <div className='img'>
                    <span className='discount'>
                      {productItems.discount}% Off
                    </span>
                    <img src={productItems.cover} alt='' />
                    <div className='product-like hover:text-red-600'>
                      <label>{count}</label> <br />
                      <i className='' onClick={increment}>
                        <FavoriteBorderIcon className='hover:text-red-600' />
                      </i>
                    </div>
                  </div>
                  <div className='product-details'>
                    <h3>{productItems.name}</h3>
                    <div className='rate'>
                      <StarOutlineIcon className='hover:text-red-600 ' />
                      <StarOutlineIcon className='hover:text-red-600' />
                      <StarOutlineIcon className='hover:text-red-600' />
                      <StarOutlineIcon className='hover:text-red-600' />
                      <StarOutlineIcon className='hover:text-red-600' />
                    </div>
                    <div className='price'>
                      <h4>${productItems.price}.00 </h4>
                      {/* step : 3  
                      
                    */}
                      <button onClick={(e) => e.target.value}>
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default index
