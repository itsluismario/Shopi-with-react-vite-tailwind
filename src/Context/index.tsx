import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ( {children}: any ) => {
    
    // Shopping Cart • Increment quantity  
    const [ count, setCount ] = useState(0)

    // Product Detail • Open/Close 
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checout Side Menu • Open/Close 
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail • Show product
    const [ productToShow, setproductToShow] = useState({
                                                title: "",
                                                price: "",
                                                description: "",
                                                images: [],
                                            })
    
    // Shopping Cart • Add products to cart 
    const [ cartProducts, setCartProducts ] = useState([])

    // Shopping Cart •  Upate/Remove number of item
    const updateCart = () => {
        let quantityItemsInCart = 0 
        const newItemsInCart = cartProducts.map(product => quantityItemsInCart = quantityItemsInCart + product.quantity)
        setCount(newItemsInCart)
    } 

    // Shoppinh Cart • Get the total cost 
    const totalCost = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
    <ShoppingCartContext.Provider
        value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setproductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            updateCart,
            totalCost
            }}>
            {children}
    </ShoppingCartContext.Provider>
    )
}
