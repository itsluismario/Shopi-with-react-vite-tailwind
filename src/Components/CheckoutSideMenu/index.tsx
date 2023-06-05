import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { v4 as uuidv4 } from 'uuid';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }    

    const handleCheckout = () => {
        const { cartProducts, setOrder, setCartProducts, count, order } = context
        const orderToAdd = {
            date: "01.02.23",
            products: cartProducts,
            totalProducts: count,
            totalPrice: totalPrice(cartProducts?cartProducts: [])
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        context.closeCheckoutSideMenu()
    }


    return (
        <aside 
            className={`${ context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } 
            w-[360px] h-[calc(100vh-80px)] flex-col fixed top-20 right-0 border 
            border-black rounded-lg bg-white`
            }>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                    <XMarkIcon 
                        onClick={() => context.closeCheckoutSideMenu()} 
                        className="h-6 w-6 text-black cursor-pointer">    
                    </XMarkIcon>
            </div>
            <div className="px-6 overflow-y-scroll flex-1 ml-0">
                {
                context.cartProducts.map((product) => (
                    <OrderCard 
                        key={uuidv4()} 
                        id={product.id}
                        title={product.title} 
                        imagesUrl={product.images} 
                        price={product.price}
                        quantity={product.quantity}
                        handleDelete={handleDelete}
                    />
                ))
                }
            </div>
            <div className="px-6 mb-2">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-sm">${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
            <div className="px-6 mb-6">
                <Link to="/my-orders/last">
                    <button 
                        onClick={() => handleCheckout()}
                        className="rounded-lg bg-black text-white py-3 w-full"
                        >
                        Checkout
                    </button>
                </Link>
            </div>

        </aside>
    )
}

export default CheckoutSideMenu