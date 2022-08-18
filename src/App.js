import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";

function App() {
  const [arrayProducts, setArrayProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [totalPurchase, setTotalPurchase] = useState(0)

  useEffect(() => {
    async function getData(){
      const getApi = await fetch('https://fakestoreapi.com/products')
      const response = await getApi.json()
      setArrayProducts(response)
    }

    getData()
  },[])

  function updatesSelectedProducts(productsSelectedActual){
    setSelectedProducts([...productsSelectedActual])
    console.log(selectedProducts)
  }

  useEffect(() => {
    console.log(selectedProducts)
  }, [selectedProducts])

  useEffect(() => {
    let calcTotal = 0

        for(let index in selectedProducts){
            calcTotal = calcTotal + selectedProducts[index].preço2
        }

        setTotalPurchase(calcTotal.toLocaleString("pt-BR"))
  }, [selectedProducts])

  function addProductToCart(e){
    const newProduto = {
      nome: e.children[1].innerText,
      url: e.children[0].src,
      preço: e.children[2].innerText,
      preço2: 0,

      saleByProduct(quantity){
        newProduto.preço2 = Number(newProduto.preço.replace(/[^0-9-.]/g,'')) * quantity
      }
    }
    
    for(let index in selectedProducts){
      if(selectedProducts[index].nome === e.children[1].innerText){
        alert('Esse produto já foi adicionado!')
        return
      }
    }
    
    setSelectedProducts([...selectedProducts, newProduto])      
  }
  
  return (
    <>
      <header>
        <Nav totalPurchase={totalPurchase} updatesSelectedProducts={updatesSelectedProducts} selectedProducts={selectedProducts}/>
      </header>

      <main>
        {arrayProducts.map(el => <Card key={el.id} name={el.title} price={el.price} img_url={el.image} addProductToCart={addProductToCart} />)  }
      </main>  
    </>
  );
}

export default App;
