import React, { useState } from "react";
import { useContext } from "react";
import image from '../../assets/shopping-cart.png';
import { AddToCardContext } from "../../contexts/AddToCart";
import Purchases from "../Purchases/Purchases";
import { ContainerNav } from "./style";

function Nav(){
    const [modalContainerPurchases, setModalContainerPurchases] = useState(false)
    const {counterProductsPurchase} = useContext(AddToCardContext)

    function disable(){
        setModalContainerPurchases(!modalContainerPurchases)
    }

    return(
        <ContainerNav>
            {
                modalContainerPurchases === false ? 
                    <>                                                                                                          
                    <img onClick={() => setModalContainerPurchases(!modalContainerPurchases)} className={`containerNav__img`} src={image} alt="uma foto" />
                    <span onClick={() => setModalContainerPurchases(!modalContainerPurchases)} className="containerNav__counter-products"> {counterProductsPurchase} </span>
                    </>
                 :  <Purchases disable={disable}/>                    
            }             
        </ContainerNav>
    )
}

export default Nav;