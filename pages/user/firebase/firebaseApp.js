import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBJ7X8-wGXWMaAfKugEBvFWFO259VNo3uU',
  authDomain: 'e-commercetamplate.firebaseapp.com',
  projectId: 'e-commercetamplate',
  storageBucket: 'e-commercetamplate.appspot.com',
  messagingSenderId: '812402370226',
  appId: '1:812402370226:web:7af16078ac32cee6e04bab',
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth()
// export const initFirebase = () => {
//   return app
// }
