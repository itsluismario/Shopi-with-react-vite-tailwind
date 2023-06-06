import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
function Home() {
  const context = useContext(ShoppingCartContext)

  const { searchByTitle, setSearchByTitle } = context
  
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
              context.items?.map(item => (
                <Card key={item.id} data={item} />
              ))
            } 
          </div>
          <ProductDetail/>
      </Layout>
  )
}

export default Home
