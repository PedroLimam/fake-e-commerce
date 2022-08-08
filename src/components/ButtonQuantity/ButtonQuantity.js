import styled from "styled-components";
import { colorBlackGeneral, colorWhite } from "../../config/style";

export const ButtonQuantity = styled.button`
    background-color: ${colorWhite};
    border-radius: 4px;
    color: ${colorBlackGeneral};
    height: 24px;
    width: 24px;
    padding: 4px 8PX;
    font-size: 14px;
    font-weight: bolder;

    :hover{
        opacity: 0.88;
    }
`