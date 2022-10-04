import styled from "styled-components";
import { colorButtonPurchase, colorGrayMain, colorWhite, flexAllCenter} from "../../config/style";

export const ContainerShoppping = styled.div`
    width: 260px;
    height: 112px;
    background-color: ${colorGrayMain};
    border-radius: 8px;
    position: relative;
    ${flexAllCenter}
   
    .containerShopping__box-productRepresentation{
        display: flex;
        justify-content: space-evenly;

        .containerShopping__img{
            width: 42px;
            height: 35px;
            border-radius: 8px;
            transform: translate(-2px, 27px);       
        } 

        .containerShopping__description{
            width: 70%;
            text-align: left;

            .containerShopping__name{
                font-size: 13px;
                margin-bottom: 10px;
            }

            .containerShopping__price{
                font-size: 13px;
            }
        } 
    }
    
    .containerShopping__box-counterQuantity{
        ${flexAllCenter};
        justify-content: space-around;
        background-color: ${colorWhite};
        border-radius: 8px;
        width: 100px;
        height: fit-content;
        padding: 4px;
        font-size: 18px;
        position: absolute;
        bottom: 4px;
        right: 4px;
        z-index: 10;
        
        h2{
            font-size: 18px;
        }
    }

    .containerShopping__button-delete{
        ${flexAllCenter}
        width: 25px;
        height: 25px;
        padding: 2px 4px;
        background-color: ${colorButtonPurchase};
        color: ${colorWhite};
        border-radius: 4px;
        margin-bottom: 5px;
        font-size: 13px;
        text-align: center;
        position: absolute;
        right: -2px;
        top: -5px;
        cursor: pointer;
        transition: 400ms ease;
        
        :hover{
            transform: translateY(-3px)
        }
    }
`