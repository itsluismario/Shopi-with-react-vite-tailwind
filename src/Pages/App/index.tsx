import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <Signin/> },
    { path: '/*', element: <NotFound/> },
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
