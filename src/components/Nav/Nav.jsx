import React, { useState } from "react";
import { useContext } from "react";
import image from '../../assets/shopping-cart.png';
import { AddToCardContext } from "../../contexts/AddToCart";
import Purchases from "../Purchases/Purchases";
import { ContainerNav } from "./style";
import logoEcommerce from '../../assets/logo-ecommerce.svg';
import InputText from "../InputText/InputText";

function Nav({search}){
    const [modalContainerPurchases, setModalContainerPurchases] = useState(false)
    const {counterProductsPurchase} = useContext(AddToCardContext)

    function disable(){
        setModalContainerPurchases(!modalContainerPurchases)
    }

    return(
        <>
            <ContainerNav>                     
                <img className={`containerNav__img-logo`} src={logoEcommerce} alt="imagem logomarca" />
                <InputText search={search} />
                <img onClick={() => setModalContainerPurchases(!modalContainerPurchases)} className={`containerNav__img-cart`} src={image} alt="uma foto" />
                <span onClick={() => setModalContainerPurchases(!modalContainerPurchases)} className="containerNav__counter-products"> {counterProductsPurchase} </span>
            </ContainerNav>
            {
                modalContainerPurchases && <Purchases disable={disable}/>   
            }             
        </>
    )
}

export default Nav;