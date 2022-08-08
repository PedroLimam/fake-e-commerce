import React from "react";
import { Button } from "./style";

function ButtonSelected({addProductToCart}){
    return(
        <Button onClick={(e) => {
            addProductToCart(e.target.parentNode)
        }}>Comprar</Button>
    )
}

export default ButtonSelected;