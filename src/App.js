import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import Pagination from "./components/Pagination/Pagination";
import AddCardContextProvider from "./contexts/AddToCart";

function App() {
  const [arrayProducts, setArrayProducts] = useState([])
  const [filterArray, setFilterArray] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itensPerPage = 8
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const itensFiltered = filterArray.slice(startIndex, endIndex)

  useEffect(() => {
    async function getData(){
      const getApi = await fetch('https://fakestoreapi.com/products')
      const response = await getApi.json()
      
      for(let produto in response){
        if(response[produto].title.split(" ").length > 7){
          response[produto].title = `${response[produto].title.split(" ", 7).join(" ")}...`
        }
      }

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
        {itensFiltered.map(el => <Card key={el.id} name={el.title} price={el.price} img_url={el.image}/>)}
      </main>   

      <Pagination filterArray={filterArray} setCurrentPage={setCurrentPage}/>
    </AddCardContextProvider>
  );
}

export default App;
