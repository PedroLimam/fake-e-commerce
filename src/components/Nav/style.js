import styled from "styled-components";
import { colorButtonPurchase, flexAllCenter } from "../../config/style";
import InputText from "../InputText/InputText";


export const ContainerNav = styled.nav`
    position: relative;
    height: 100%;
    ${flexAllCenter};
    justify-content: space-between;
    
    .containerNav__img-cart{
        transition: 400ms ease;
        cursor: pointer;
        margin-right: 15px;
    }

    .containerNav__img-logo{
        width: 230px;
        margin-left: 15px;

        @media (max-width: 767px) {
            display: none;
        }
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
        right: 10px;
        top: 40px;    
        cursor: pointer;
    }

    ${InputText}{
        transform: translate(-77px, 47px);
    }
`