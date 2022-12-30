import Head from 'next/head'

import Link from 'next/link'
import dynamic from 'next/dynamic'

const Homepage = dynamic(() => import('./homePage'), {
  loading: () => 'Loading...',
})

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  )
}
