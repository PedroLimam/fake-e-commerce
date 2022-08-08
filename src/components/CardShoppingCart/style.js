import styled from "styled-components";
import { colorGrayMain, flexCenter } from "../../config/style";

export const ContainerShoppping = styled.div`
    width: 260px;
    height: 104px;
    background-color: ${colorGrayMain};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;

    .containerShopping__box-productRepresentation{
        ${flexCenter}
        justify-content: space-between;

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