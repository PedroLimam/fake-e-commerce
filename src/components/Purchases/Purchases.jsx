import React from "react";
import CardShoppingCart from "../CardShoppingCart/CardShoppingCart";
import { ContainerPurchases } from "./style";


function Purchases({selectedProducts, updatesSelectedProducts, disable, totalPurchase}){  

    return(
        <ContainerPurchases>
            <button className="containerPurchases__button" onClick={() => disable()}>Sair</button> 
            <h2 className="containerPurchases__title">Suas compras</h2>

            <div className="containerPurchases__products">
            {selectedProducts.map((el, index) => <CardShoppingCart updatesSelectedProducts={updatesSelectedProducts} selectedProducts={selectedProducts}  saleByProduct={el.saleByProduct} key={index} name={el.nome} img_url={el.url} />)}
            </div>

            <h3 className="containerPurchases__sum">Total: R$ {totalPurchase}</h3>
        </ContainerPurchases>
    )
}

export default Purchases;