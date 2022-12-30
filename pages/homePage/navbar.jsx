import Head from 'next/head'
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../user/firebase/authcontext'
import { useRouter } from 'next/router'
function Home() {
  // const { user } = useAuth()
  // const router = useRouter()
  const [isShow, setShow] = useState(false)
  const handleClick = () => {
    setShow(!isShow)
  }

  return (
    <>
      <div>
        <Head>
          <title>Home Page</title>
        </Head>

        <main>
          <div className='px-5 navbar py-4 border bg-slate-100 shadow-lg border-b-2 border-t-0'>
            <div className='largenav flex justify-between '>
              <div className='rightside flex px-3 items-center space-x-2 gap-3  '>
                <Link
                  href={'/'}
                  className='ml-10 h-10 text-black font-bold hover:bg-slate-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 py-2.5 rounded-md  inline-flex items-center'
                >
                  <HomeIcon />
                </Link>
                <div className='flex items-center border-2 border-solid border-gray-50'>
                  {' '}
                  <input
                    type='text'
                    placeholder='Search...'
                    className='border-none outline-none bg-transparent text-base'
                  />
                  <SearchOutlinedIcon />
                </div>
              </div>
              <div className='leftside flex text-lg '>
                <button className='mx-2 h-10 text-black hover:bg-slate-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-50 dark:hover:bg-slate-100 dark:focus:ring-white '>
                  <Link href={'/Admin'} className='text4 '>
                    {' '}
                    Admin
                  </Link>
                </button>
                <div className='catagory'>
                  <div className='relative inline-block text-right'>
                    <div>
                      <button
                        type='button'
                        className='mr-1 h-10 text-black hover:bg-slate-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-50 dark:hover:bg-slate-100 dark:focus:ring-white'
                        id='menu-button'
                        aria-expanded='true'
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        {' '}
                        Catagory
                        <svg
                          className='-mr-1 ml-2 h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {isShow && (
                    <div
                      className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='menu-button'
                      tabindex='-1'
                    >
                      <ul className=''>
                        <li className='py-1' role='none hover:bg-slate-100'>
                          <Link
                            href='#'
                            className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-0'
                          >
                            Shirts
                          </Link>
                          <Link
                            href='#'
                            className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-1'
                          >
                            Pants
                          </Link>
                        </li>
                        <li className='py-1' role='none'>
                          <Link
                            href='#'
                            className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-2'
                          >
                            Shoes
                          </Link>
                          <Link
                            href='#'
                            className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-3'
                          >
                            Today's Offer
                          </Link>
                        </li>

                        <li className='py-1' role='none'>
                          <Link
                            href='#'
                            className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100'
                            role='menuitem'
                            tabindex='-1'
                            id='menu-item-6'
                          >
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  type='button'
                  className='mx-2 h-10 text-black hover:bg-slate-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-50 dark:hover:bg-slate-100 dark:focus:ring-white'
                >
                  <Link href={'/user/register'} className='text4'>
                    {' '}
                    Register
                  </Link>
                </button>
                <button
                  type='button'
                  className=' h-10 text-black hover:bg-slate-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-50 dark:hover:bg-slate-100 dark:focus:ring-white '
                >
                  <Link href={'/user/login'} className='text4 '>
                    {' '}
                    login
                  </Link>
                </button>

                <div className='cart '>
                  <button
                    type='button'
                    className='mx-2 h-10 text-black hover:bg-slate-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-50 dark:hover:bg-slate-100 dark:focus:ring-white'
                  >
                    <i className='fa fa-user icon-circle'></i>
                    <Link href={'/homePage/cart'} className='text4'>
                      {' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                        />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className='mobilenav'></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
