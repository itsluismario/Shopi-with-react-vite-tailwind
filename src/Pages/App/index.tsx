import { useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '', element: <Home/> },
    { path: '/shoes', element: <Home/> },
    { path: '/furniture', element: <Home/> },
    { path: '/prince', element: <Home/> },
    { path: '/others', element: <Home/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/*', element: <NotFound/> },
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
        <AppRoutes/>
        <Navbar/>
      <CheckoutSideMenu />
    </ShoppingCartProvider>
  )
}

export default App
