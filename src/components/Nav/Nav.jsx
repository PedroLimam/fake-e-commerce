import React, { useState } from "react";
import image from '../../assets/shopping-cart.png';
import Purchases from "../Purchases/Purchases";
import { ContainerNav } from "./style";

function Nav({selectedProducts, updatesSelectedProducts}){
    const [modalContainerPurchases, setModalContainerPurchases] = useState(false)
  
    function disable(){
        setModalContainerPurchases(!modalContainerPurchases)
    }

    return(
        <ContainerNav>
            {
                modalContainerPurchases === false ? 
                    <>                                                                                                              
                    <img onClick={() => setModalContainerPurchases(!modalContainerPurchases)} className={`containerNav__img`} src={image} alt="uma foto" />
                    </>
                 :  <Purchases disable={disable}  updatesSelectedProducts={updatesSelectedProducts} selectedProducts={selectedProducts}/>                    
            }             
        </ContainerNav>
    )
}

export default Nav;