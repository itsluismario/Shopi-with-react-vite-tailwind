import { useContext, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
function Home() {
  const context:any = useContext(ShoppingCartContext)

  const { searchByTitle, setSearchByTitle, filteredItems, items, searchItemsByCategory, setSearchItemsByCategory } = context
  
  const renderView = () => {

    const pathSplitted = window.location.pathname.split('/');
    let category = pathSplitted[pathSplitted.length - 1];

    const FilteredItemsByCategory = (items:any, category:any ) => {
        if (category.length === 0) {
          return items?.map((item:any) => item)        
        } else {
          return items?.filter((item:any) => item.category.name.toLowerCase().replace(/\s/g, '') === category)
        }
    }

    useEffect(() => {
      setSearchItemsByCategory(FilteredItemsByCategory(items, category))
    }, [items, category])

    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
            return (
              filteredItems?.map((item:any) => (
                <Card key={item.id} data={item} />
              ))
            )
          } else {
            return (
              <div className='flex items-center justify-center mt-10 w-screen'>
                <p className="text-center">We could not find it</p>
              </div>
            )
          }
    } else {
        return (
          searchItemsByCategory?.map((item:any) => (
            <Card key={item.id} data={item} />
          ))
        )
      }
  }
  
  
  return (
      <Layout>
          <div className='flex items-center justify-center relative w-80'>
            <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
          </div>
          <input 
            type="text" 
            placeholder="Search products"
            className="rounded-lg border border-black w-80 mb-4 p-4 focus:outline-none"
            onChange={(event) => setSearchByTitle(event.target.value)}
            />
          <div className="grid gap-4 grid-cols-4 max-w-screen-lg">
            {
            renderView()
            } 
          </div>
          <ProductDetail/>
      </Layout>
  )
}

export default Home
