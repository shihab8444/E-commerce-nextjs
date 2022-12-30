import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from './firebase/authcontext'

const ProtectedRoute = (children) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/user/login')
    }
  }, [router, user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
