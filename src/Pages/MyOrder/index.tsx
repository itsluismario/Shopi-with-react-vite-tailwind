import React, { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function MyOrder() {
  const context:any = useContext(ShoppingCartContext)

  const pathSplitted = window.location.pathname.split('/');
  let param = pathSplitted[pathSplitted.length - 1];
  let result
  // Draw orders in my-orders/last
  if (param === "last") {
    result = context.order.slice(-1)[0]
  } 
  // Draw orders in my-orders/:id 
  else {
    result = context.order.slice(param)[0]
  }

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h2 className="font-medium text-xl">My Order!</h2>
        </div>
       
        <div>
          {
          result.products.map((product:any) => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title} 
              imagesUrl={product.images} 
              price={product.price}
              quantity={product.quantity}
            />
            ))
          }
        </div>
      </Layout>
    )
  }
  
  export default MyOrder
  