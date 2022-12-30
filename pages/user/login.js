import Head from 'next/head'
import Layout from '/pages/user/layout/layout'
import Link from 'next/link'
import styles from '../../styles/form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import { useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useFormik } from 'formik'
import loginValidate from './validate'
import { useRouter } from 'next/router'
import { useAuth } from './firebase/authcontext'
export default function Login() {
  const [show, setShow] = useState(false)
  //use fromik for signin
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const formik = useFormik({
    initialValues: {
      data,
    },
    validate: loginValidate,
    onSubmit,
  })

  async function onSubmit(values) {
    console.log(user)
    try {
      await login(values.email, values.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' })
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className='w-3/5 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
          <p className='w-3/4 mx-auto text-gray-400'>
            Please Enter your email and password
          </p>
        </div>

        {/* form */}
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
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
          {/* Password Form */}

          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
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
              onClick={() => setShow(!show)}
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

          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
          <div className='input-button'>
            <button
              type='button'
              onClick={handleGoogleSignin}
              className={styles.button_custom}
            >
              Sign In with Google{' '}
              <Image src={'/assets/google.svg'} width='20' height={20}></Image>
            </button>
          </div>
          <div className='input-button'>
            <button type='button' className={styles.button_custom}>
              Sign In with Github{' '}
              <Image src={'/assets/github.svg'} width={25} height={25}></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-center text-gray-400 '>
          don't have an account yet?{' '}
          <Link href={'/user/register'}>Sign Up</Link>
        </p>
      </section>
    </Layout>
  )
}
