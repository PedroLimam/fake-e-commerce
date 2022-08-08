import React from "react";

import { ContainerPurchases } from "./style";


function Purchases({ disable}){  

    return(
        <ContainerPurchases>
            <button className="containerPurchases__button" onClick={() => disable()}>Sair</button> 
            <h2 className="containerPurchases__title">Suas compras</h2>

            <div className="containerPurchases__products">
            </div>

            <h3 className="containerPurchases__sum">Total: R$ </h3>
        </ContainerPurchases>
    )
}

export default Purchases;