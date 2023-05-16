import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import './App.css'

function App() {

  return (
    <h1 className="bg-amber-500">
      <Home/>
      <MyAccount/>
      <MyOrders/>
      <MyOrder/>
      <NotFound/>
      <Signin/>
    </h1>
  )
}

export default App
