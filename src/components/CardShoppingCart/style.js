import styled from "styled-components";
import { colorButtonPurchase, colorGrayMain, colorWhite, flexCenter } from "../../config/style";

export const ContainerShoppping = styled.div`
    width: 260px;
    height: 112px;
    background-color: ${colorGrayMain};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    
    .containerShopping__button-delete{
        width: 20px;
        padding: 2px 4px;
        background-color: ${colorButtonPurchase};
        color: ${colorWhite};
        border-radius: 4px;
        margin-bottom: 5px;
        font-size: 13px;
        text-align: center;
        cursor: pointer;
        transition: 400ms ease;

        :hover{
            transform: translateY(-3px)
        }
    }

    .containerShopping__box-productRepresentation{
        ${flexCenter}
        justify-content: space-between;
        margin-bottom: 5px;

        .containerShopping__img{
        width: 35px;
        height: 35px;
        } 

        .containerShopping__name{
            width: 80%;
            font-size: 15px;
        }
    }
    
    .containerShopping__box-counterQuantity{
        font-size: 20;
        ${flexCenter}
    }

`