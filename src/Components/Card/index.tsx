import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import './styles.css'

const Card = ( {data}:any ) => {
    
    const context:any = useContext(ShoppingCartContext)
    const { openProductDetail, setproductToShow, closeCheckoutSideMenu } = context

    const showProduct = (productDetail:any) => {
        openProductDetail()
        setproductToShow(productDetail)
        closeCheckoutSideMenu()
    } 

    //Agrega un producto al carrito, y si ya existe aumenta la cantidad y suma los productos
    const addProductsToCart = (event:any, productData:any) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        
        const productIndex = context.cartProducts.findIndex((product:any) => product.id === productData.id)
        
        let newCart = []
        if (productIndex >= 0) {
        newCart = [...context.cartProducts]
        newCart[productIndex].quantity++
        newCart[productIndex].price = productData.price + newCart[productIndex].price
        } else {
        newCart = [...context.cartProducts, { ...productData, quantity: 1 }]
        }
        context.setCartProducts(newCart)
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg mb-8"
            onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={data.images[0]} 
                    alt={data.title}/>
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-base font-medium">${data.price}</span>
                
            </p>
            <p 
                onClick={(event) => addProductsToCart(event, data)} 
                className="addProduct flex text-base">
                    <span className="addProduct hover:underline sunderline-offset-2" >Add product</span>
                    <span><ChevronRightIcon className="h-6 w-4 text-blue-500" /></span>
            </p>
        </div>
    )
}

export default Card