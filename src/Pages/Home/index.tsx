import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { apiUrl } from "../../API"

function Home() {

  const [items, setItem] = useState(null)
    
  useEffect(() => {
      fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => setItem(data)
      )
  }, [])
  
  return (
      <Layout>
          Home
          <div className="grid gap-4 grid-cols-4 max-w-screen-lg">
            {
              items?.map(item => (
                <Card key={item.id} data={item} />
              ))
            } 
          </div>
          <ProductDetail/>
      </Layout>
  )
}

export default Home
