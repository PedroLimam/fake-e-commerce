import React, { useContext } from "react";
import { AddToCardContext } from "../../contexts/AddToCart";
import { ButtonQuantity } from "../ButtonQuantity/ButtonQuantity";
import { ContainerShoppping } from "./style";
// import { BsPlusLg } from 'react-icons/bs'
import { BsPlusLg, BsDashLg, BsXLg } from 'react-icons/bs'


function CardShoppingCart({name, img_url, quantity}){

    const {selectedProducts, updatesSelectedProducts} = useContext(AddToCardContext)

    function addQuantity(){
        const productsFilter = [...selectedProducts]

        for(let produto in productsFilter){
            if(productsFilter[produto].name === name){
                productsFilter[produto].addQuantity()
                productsFilter[produto].totalSales = productsFilter[produto].quantity * productsFilter[produto].price2
            }
        } 

        updatesSelectedProducts(productsFilter)
    } 

    function decreaseQuantity(){
        const productsFilter = [...selectedProducts]     

        for(let produto in productsFilter){
            if(productsFilter[produto].name === name & productsFilter[produto].quantity === 1) return

            if(productsFilter[produto].name === name & productsFilter[produto].quantity > 1){
                productsFilter[produto].decreaseQuantity()
                productsFilter[produto].totalSales = productsFilter[produto].quantity * productsFilter[produto].price2
            }
        }

        updatesSelectedProducts(productsFilter)
    }
  
    function deleteProduct(){
        const newProdutos = selectedProducts.filter(el => el.name !== name)
        updatesSelectedProducts(newProdutos)
    }

    return(
        <ContainerShoppping >
            <span className="containerShopping__button-delete" onClick={deleteProduct}><BsXLg/></span>

            <div className="containerShopping__box-productRepresentation">
                <img className="containerShopping__img" src={img_url} alt="imagem do produto" />
                <h3 className="containerShopping__name">{name}</h3>
            </div>

            <div  className="containerShopping__box-counterQuantity">
                <ButtonQuantity onClick={decreaseQuantity}> <BsDashLg/> </ButtonQuantity>
                <h2>{quantity}</h2>
                <ButtonQuantity onClick={addQuantity}><BsPlusLg/></ButtonQuantity>
            </div>      
        </ContainerShoppping>
    )
}
export default CardShoppingCart;