import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import ProtectedRoute from './user/protectedRoute'
import { AuthContextProvider } from './user/firebase/authcontext'
import { useRouter } from 'next/router'
const noAuthRequired = ['/', '/login', '/signup']
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
