import styled from "styled-components";
import { colorButtonPurchase, colorCardProduct, colorWhite } from "../../config/style";

export const ContainerPurchases = styled.div`
    background: ${colorCardProduct};
    width: 300px;
    height: 100vh;
    position: fixed;
    right: 0;
    z-index: 10;

    @media (max-width: 767px) {
        width: 100vw;

        .containerPurchases__button{
            width: 50px;
            height: 25px;
            font-size: 16px;
        }
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
        margin: 24px auto 20px 20px;
    }
    .containerPurchases__sum{
        margin: 25px auto auto 20px;
    }

    .containerPurchases__button{
        background-color: ${colorButtonPurchase};
        color: ${colorWhite};
        border-radius: 4px;
        margin: 10px auto auto 10px;
        width: 35px;
        padding: 2px 4px;
        transition: 400ms ease;

        :hover{
            transform: translateX(-3px)
        }
    }
`