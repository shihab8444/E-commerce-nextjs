import Sdata from './Sdata'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function slider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    appendDots: (dots) => {
      return <ul style={{ margin: '40px' }}>{dots}</ul>
    },
  }
  return (
    <>
      <div className='slider pl-36 pr-48 w-full shadow-lg bg-white '>
        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <>
                <div
                  className='pt-5 flex justify-between bg-white '
                  key={index}
                >
                  <div className='left p-28   '>
                    <h1 className='text-4xl leading-10 mt-12 mb-5'>
                      {value.title}
                    </h1>
                    <p className='mt-5'>{value.desc}</p>
                    <button className='bg-cyan-900 text-lg text-center px-2 py-2  text-white rounded-md cursor-pointer mt-5'>
                      Visit Collections
                    </button>
                  </div>
                  <div className='right p-24  '>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default slider
