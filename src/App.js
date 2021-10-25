import {useEffect, useReducer} from 'react'

import LoginRouter from './routes/LoginRouter'

import { AuthContext } from './contexts/AuthContext'
import { AuthReducer } from './reducers/AuthReducer'

const init = () => {
  return JSON.parse(localStorage.getItem("token")) || "no-token"
}
const App = () => {
  const [token, dispatch] = useReducer(AuthReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token))
  }, [token])

  return (
    <AuthContext.Provider value={{token, dispatch}}>
      <LoginRouter />
    </AuthContext.Provider>
  )
}

export default App
