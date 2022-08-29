import { createContext, useEffect, useState} from "react";

export const AddToCardContext = createContext()

function AddCardContextProvider({ children }){
  const [totalPurchase, setTotalPurchase] = useState(0)
  const [selectedProducts, setSelectedProducts] = useState([])

  useEffect(() => {
    let calcTotal = 0
 
    for(let index in selectedProducts){
      calcTotal = calcTotal + selectedProducts[index].totalSales
    }

      setTotalPurchase(calcTotal.toLocaleString("pt-BR"))
  }, [selectedProducts])
  
  function addProductToCart(e){
    const newProduto = {
      name: `${e.children[1].innerText.split(" ").splice(0,7).join(' ')}...`,
      url: e.children[0].src,
      price: e.children[2].innerText,
      price2: Number(e.children[2].innerText.replace(/[^0-9-.]/g,'')),
      quantity: 1,
      totalSales: Number(e.children[2].innerText.replace(/[^0-9-.]/g,'')), 
    
      addQuantity(){
        this.quantity ++
      },

      decreaseQuantity(){
        this.quantity --
      }
    }
  
    for(let index in selectedProducts){
      if(selectedProducts[index].name === newProduto.name){
        alert('Esse produto já foi adicionado!')
        return
      }
    }
    
    setSelectedProducts([...selectedProducts, newProduto])      
  }

  function updatesSelectedProducts(productsSelectedActual){
    setSelectedProducts(productsSelectedActual)
  }

  return (
      <AddToCardContext.Provider value={{selectedProducts, setSelectedProducts, addProductToCart, updatesSelectedProducts, totalPurchase}} >
        {children}
      </AddToCardContext.Provider>
  )
}

export default AddCardContextProvider