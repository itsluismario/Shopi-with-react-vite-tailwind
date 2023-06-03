import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = ( {data} ) => {
    
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setproductToShow(productDetail)
        context.closeCheckoutSideMenu()
    } 

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (productID) => {
        const IsInCart = context.cartProducts.filter(product => product.id === productID).length > 0
        if (IsInCart) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-emerald-500  w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="h-6 w-6 text-white cursor-pointer" />
                </div>
            )

        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" 
                    onClick={(event) => addProductsToCart(event, data)}>
                    <PlusIcon  className="h-6 w-6 text-black cursor-pointer" />
                </div>
            )

        }
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={data.images[0]} 
                    alt={data.title}/>
                    {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export default Card