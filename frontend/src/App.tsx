import { Routes , Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthCallbackPage from './pages/auth-callback/AuthCallbackPage'
import { AxiosInstance } from './lib/axios'

const App = () => {
// todo: add authtentication flow

const getSomeData = async()=>{
  await AxiosInstance.get('/users',{
    headers:{
      "Authorization": `Bearer $(token)}`
    }
  })
}

  return (
	<>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/auth-callback' element={<AuthCallbackPage />} />
  </Routes>
  </>
  )
}

export default App
