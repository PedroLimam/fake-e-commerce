import styled from "styled-components";
import { colorBlackGeneral, colorWhite, flexAllCenter} from "../../config/style";

export const ButtonQuantity = styled.button`
    background-color: ${colorWhite};
    border-radius: 4px;
    color: ${colorBlackGeneral};
    height: fit-content;
    width: fit-content;
    padding: 5px 7px;
    font-size: 12px;
    ${flexAllCenter};

    :hover{
        opacity: 0.88;
    }
`