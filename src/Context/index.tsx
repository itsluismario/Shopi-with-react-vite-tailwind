import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../API"

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

    // Shopping Cart • Order
    const [ order, setOrder ] = useState([])

    // Get products
    const [ items, setItems ] = useState(null)
    const [ filteredItems, setFilteredItems ] = useState(null)
        
    // Get products by title
    const [ searchByTitle, setSearchByTitle ] = useState(null)

    // Get products by category
    const [ searchItemsByCategory, setSearchItemsByCategory ] = useState(null)

    // Get products from the API
    useEffect(() => {
        fetch(`${apiUrl}/products`)
        .then(response => response.json())
        .then(data => setItems(data)
        )
    }, [])

    // Search products 
    const filteredItemsByTitle = (searchItemsByCategory, searchByTitle) => {
            return searchItemsByCategory?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [ items, searchByTitle ])


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
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchItemsByCategory,
            setSearchItemsByCategory
            }}>
            {children}
    </ShoppingCartContext.Provider>
    )
}
