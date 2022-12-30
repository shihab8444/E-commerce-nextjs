import Head from 'next/head'
import Link from 'next/link'

import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi'
import { useState } from 'react'
import Layout from '/pages/user/layout/layout'
import styles from '../../styles/form.module.css'
// import { signIn, signOut } from 'next-auth/react'
import { useFormik } from 'formik'
import { RegisterValidate } from './validate'
import { useAuth } from './firebase/authcontext'
import { useRouter } from 'next/router'
export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false })
  const router = useRouter()
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const formik = useFormik({
    initialValues: {
      data,
    },
    validate: RegisterValidate,
    onSubmit,
  })

  async function onSubmit(values) {
    try {
      await signup(values.email, values.password)
      router.push('/user/login')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
        </div>

        {/* form */}
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type='text'
              name='Username'
              placeholder='Username'
              className={styles.input_text}
              {...formik.getFieldProps('username')}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className='text-red-500 place-self-start pl-3'>
              {formik.errors.username}
            </span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              {...formik.getFieldProps('email')}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className='text-red-500 place-self-start pl-3'>
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name='password'
              placeholder='password'
              className={styles.input_text}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              {...formik.getFieldProps('password')}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className='text-red-500 place-self-start pl-3'>
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name='cpassword'
              placeholder='Confirm Password'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className='text-red-500 place-self-start pl-3'>
              {formik.errors.cpassword}
            </span>
          ) : (
            <></>
          )}

          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-center text-gray-400 '>
          Have an account? <Link href={'/user/login'}>Sign In</Link>
        </p>
      </section>
    </Layout>
  )
}
