import React, { useEffect, useState } from "react";
import { ButtonQuantity } from "../ButtonQuantity/ButtonQuantity";
import { ContainerShoppping } from "./style";


function CardShoppingCart({name, img_url, saleByProduct, calcTotalPurchase}){
    const [counterQuantity, setCounterQuantity] = useState(0)

    useEffect(() => {
        saleByProduct(counterQuantity)  
        calcTotalPurchase()
        
    },[counterQuantity])

    function adcQuantity(){
        setCounterQuantity(counterQuantity + 1)
    }
    function decreaseQuantity(){
        if(counterQuantity === 0) return
        setCounterQuantity(counterQuantity - 1)
    }
  

    return(
        <ContainerShoppping>

            <div className="containerShopping__box-productRepresentation">
                <img className="containerShopping__img" src={img_url} alt="imagem do produto" />
                <h3 className="containerShopping__name">{name}</h3>
            </div>

            <div  className="containerShopping__box-counterQuantity">
                <ButtonQuantity onClick={adcQuantity}>+</ButtonQuantity>
                <h2>{counterQuantity}</h2>
                <ButtonQuantity onClick={decreaseQuantity}>-</ButtonQuantity>
            </div>
            
        </ContainerShoppping>
    )
}
export default CardShoppingCart;