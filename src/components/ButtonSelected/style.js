import styled from "styled-components";
import { colorButtonPurchase, colorCardProduct } from "../../config/style";

export const Button = styled.button`
    padding: 5px;
    width: 118px;
    height: 40px;
    background-color: ${colorButtonPurchase};
    color: ${colorCardProduct};
    border-radius: 5px;
    transition: all 400ms ease;
    font-weight: bolder;

    :hover{
        opacity: 0.8;
        transform: scale(1.06);
    }
`