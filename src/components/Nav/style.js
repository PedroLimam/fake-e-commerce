import styled from "styled-components";
import { colorButtonPurchase, flexAllCenter } from "../../config/style";

export const ContainerNav = styled.nav`
    position: relative;
    
    .containerNav__img{
        position: absolute;
        top: 15px;
        right: 20px;
        transition: 400ms ease;
        cursor: pointer;
    }

    .containerNav__counter-products{
        width: 35px;
        height: 35px;
        padding: 5px;
        border-radius: 50%;
        background-color: ${colorButtonPurchase};
        color: white;
        font-size: 16px;
        text-align: center;
        position: absolute;
        right: 18px;
        top: 11px;    
        cursor: pointer;
    }

    .containerNav__button-quantity{
        width: fit-content;
        height: fit-content;
        padding: 4px 8px;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        top: 21px;
        right: 31px;
        ${flexAllCenter}
    }
`