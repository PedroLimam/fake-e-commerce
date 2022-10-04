import styled from "styled-components";
import { colorButtonPurchase, colorCardProduct, colorWhite } from "../../config/style";

export const ContainerPurchases = styled.div`
    background: ${colorCardProduct};
    width: 300px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;

    @media (max-width: 767px) {
        width: 54vw;

        .containerPurchases__button{
            height: 25px;
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        width: 100vw;
    }

    .containerPurchases__products{
        height: 76%;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .containerPurchases__title{
        font-size: 16px;
        margin: 24px auto 20px 20px;

        @media (max-width: 767px) {
            font-size: 18px;
        }
    }
    .containerPurchases__sum{
        font-size: 16px;
        margin: 25px auto auto 20px;

        @media (max-width: 767px) {
            font-size: 18px;
        }
    }

    .containerPurchases__button{
        background-color: ${colorButtonPurchase};
        color: ${colorWhite};
        border-radius: 4px;
        margin: 10px auto auto 10px;
        width: 50px;
        padding: 2px 4px;
        transition: 400ms ease;

        :hover{
            transform: translateX(-3px)
        }
    }
`