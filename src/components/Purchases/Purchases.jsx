import React, { useState } from "react";
import CardShoppingCart from "../CardShoppingCart/CardShoppingCart";
import { ContainerPurchases } from "./style";


function Purchases({selectedProducts, updatesSelectedProducts, disable}){  
    const [totalPurchase, setTotalPurchase] = useState(0)
   
    function calcTotalPurchase (){ 
        let calcTotal = 0

        for(let index in selectedProducts){
            calcTotal = calcTotal + selectedProducts[index].preço2
            setTotalPurchase(calcTotal.toLocaleString("pt-BR"))
        }
    }

    return(
        <ContainerPurchases>
            <button className="containerPurchases__button" onClick={() => disable()}>Sair</button> 
            <h2 className="containerPurchases__title">Suas compras</h2>

            <div className="containerPurchases__products">
            {selectedProducts.map((el, index) => <CardShoppingCart updatesSelectedProducts={updatesSelectedProducts} selectedProducts={selectedProducts} calcTotalPurchase={calcTotalPurchase} saleByProduct={el.saleByProduct} key={index} name={el.nome} img_url={el.url} />)}
            </div>

            <h3 className="containerPurchases__sum">Total: R$ {totalPurchase}</h3>
        </ContainerPurchases>
    )
}

export default Purchases;