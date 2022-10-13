import { createGlobalStyle } from "styled-components";
import { colorBlackGeneral, colorCardProduct, colorGrayMain } from "../config/style";

export default createGlobalStyle`   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${colorGrayMain};
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }

    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: fit-content;

    }
    
    header{
        width: 100%;
        height: 140px;
        position: fixed;
        top: 0;
        z-index: 9;
        background-color: ${colorGrayMain};
    }

    main{
        width: 80%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 30vh;
    }
    
    button{
        border: none;
        cursor: pointer;
    }

    .btn-page{
        margin: 5px;
        padding: 6px 10px;
        border-radius: 4px;
        color: ${colorBlackGeneral};
        background-color: ${colorCardProduct};
    }
`