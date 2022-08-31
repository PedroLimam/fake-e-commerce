import styled from "styled-components";
import { colorButtonPurchase, colorGrayMain, colorWhite, flexAllCenter, flexCenterEvenly } from "../../config/style";

export const ContainerShoppping = styled.div`
    width: 260px;
    height: 112px;
    padding: 10px;
    background-color: ${colorGrayMain};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    .containerShopping__button-delete{
        ${flexAllCenter}
        width: 20px;
        height: 25px;
        padding: 2px 4px;
        background-color: ${colorButtonPurchase};
        color: ${colorWhite};
        border-radius: 4px;
        margin-bottom: 5px;
        font-size: 13px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 7px;
        transition: 400ms ease;
        
        :hover{
            transform: translateY(-3px)
        }
        
        @media (max-width: 767px) {
            width: 25px; 
        }
    }

    .containerShopping__box-productRepresentation{
        ${flexCenterEvenly}
        margin-bottom: 5px;

        .containerShopping__img{
            width: 35px;
            height: 35px;
            border-radius: 8px;
        } 

        .containerShopping__name{
            width: 70%;
            font-size: 13px;
        }
    }
    
    .containerShopping__box-counterQuantity{
        font-size: 20;
        ${flexCenterEvenly}
    }

`