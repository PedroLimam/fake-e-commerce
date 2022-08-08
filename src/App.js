import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";

function App() {
  const [arrayProducts, setArrayProducts] = useState([])

  useEffect(()=> {
    async function getData(){
      const getApi = await fetch('https://fakestoreapi.com/products')
      const response = await getApi.json()
      setArrayProducts(response)
    }
    getData()
  },[])
  
  return (
    <>
      <header>
        <Nav/>
      </header>

      <main>
        {arrayProducts.map(el => <Card key={el.id} name={el.title} price={el.price} img_url={el.image} />)  }
      </main>  
    </>
  );
}

export default App;
