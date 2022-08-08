import styled from "styled-components";
import { colorCardProduct, testeFlex } from "../../config/style";

export const Container = styled.div`
    width: 206px;
    height: 310px;
    margin: 20px 20px 40px;
    background-color: ${colorCardProduct};
    border-radius: 10px;
    cursor: pointer;
    ${testeFlex}
    

    .container__img-product{
        width: 144px;
        height: 135px;
        padding: 5px;
        margin-bottom: 10px
    }
    
    .container__name{
        padding: 5px;
        font-size: 14px;
        text-align: center;
    }

    .container__price{
        margin: 4px 0 15px;
    }

`