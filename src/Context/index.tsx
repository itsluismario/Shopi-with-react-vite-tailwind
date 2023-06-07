import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../API"

type Product = {
  title: string;
  price: string;
  description: string;
  images: string[];
};

type ShoppingCartContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  isCheckoutSideMenuOpen: boolean;
  setIsCheckoutSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  openCheckoutSideMenu: () => void;
  closeCheckoutSideMenu: () => void;
  productToShow: Product;
  setproductToShow: React.Dispatch<React.SetStateAction<Product>>;
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  order: any[]; // Define the correct type for the 'order' variable
  setOrder: React.Dispatch<React.SetStateAction<any[]>>;
  items: any[] | null; // Define the correct type for the 'items' variable
  setItems: React.Dispatch<React.SetStateAction<any[] | null>>;
  searchByTitle: string | null;
  setSearchByTitle: React.Dispatch<React.SetStateAction<string | null>>;
  filteredItems: any[] | null; // Define the correct type for the 'filteredItems' variable
  setFilteredItems: React.Dispatch<React.SetStateAction<any[] | null>>;
  searchItemsByCategory: any; // Define the correct type for the 'searchItemsByCategory' variable
  setSearchItemsByCategory: React.Dispatch<React.SetStateAction<any>>;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

export const ShoppingCartProvider = ({ children }: any) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const [productToShow, setproductToShow] = useState<Product>({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<any[]>([]);
  const [items, setItems] = useState<any[] | null>(null);
  const [filteredItems, setFilteredItems] = useState<any[] | null>(null);
  const [searchByTitle, setSearchByTitle] = useState<string | null>(null);
  const [searchItemsByCategory, setSearchItemsByCategory] = useState<any>(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (
    searchItemsByCategory: any,
    searchByTitle: any
  ) => {
    return searchItemsByCategory?.filter((item: any) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);


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
