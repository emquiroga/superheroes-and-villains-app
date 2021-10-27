import {useEffect, useReducer} from 'react'

import AuthRouter from './routes/AuthRouter'

import { AuthContext } from './contexts/AuthContext'
import { AuthReducer } from './reducers/AuthReducer'

const init = () => {
  return JSON.parse(localStorage.getItem("token")) || {token: null}
}
const App = () => {
  const [token, dispatch] = useReducer(AuthReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token))
  }, [token])

  return (
    <AuthContext.Provider value={{token, dispatch}}>
      <AuthRouter />
    </AuthContext.Provider>
  )
}

export default App
