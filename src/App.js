import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import AddCardContextProvider from "./contexts/AddToCart";

function App() {
  const [arrayProducts, setArrayProducts] = useState([])
  const [filterArray, setFilterArray] = useState(arrayProducts)

  useEffect(() => {
    async function getData(){
      const getApi = await fetch('https://fakestoreapi.com/products')
      const response = await getApi.json()
      response.map( product => product.title = `${product.title.split(" ", 7).join(" ")}...` )

      setArrayProducts(response)
      setFilterArray(response)
    }

    getData()
  },[])

  function search(searchInput){ 
    const researchedInput = searchInput.toLowerCase()
    const arrayResearched = arrayProducts.filter(el => el.title.toLowerCase().includes(researchedInput))
    
    setFilterArray(arrayResearched)
  }
 
  return (
    <AddCardContextProvider> 
      <header>
        <Nav search={search} />
      </header>

      <main>
        {filterArray.map(el => <Card key={el.id} name={el.title} price={el.price} img_url={el.image}/>)}
      </main>   
    </AddCardContextProvider>
  );
}

export default App;
