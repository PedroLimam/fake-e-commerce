import React, { useContext } from "react";
import { AddToCardContext } from "../../contexts/AddToCart";
import CardShoppingCart from "../CardShoppingCart/CardShoppingCart";
import { ContainerPurchases } from "./style";

function Purchases({disable}){  

    const {totalPurchase, selectedProducts} = useContext(AddToCardContext)

    return(
        <ContainerPurchases>
            <button className="containerPurchases__button" onClick={() => disable()}>Sair</button> 
            <h2 className="containerPurchases__title">Suas compras</h2>

            <div className="containerPurchases__products">
            {selectedProducts.map((el, index) => <CardShoppingCart key={index} name={el.name} img_url={el.url} quantity={el.quantity}/>)}
            </div>

            <h3 className="containerPurchases__sum">Total: R$ {totalPurchase}</h3>
        </ContainerPurchases>
    )
}

export default Purchases;