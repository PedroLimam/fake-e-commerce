import React from "react";

import ButtonSelected from "../ButtonSelected/ButtonSelected";

import { Container } from "./style";


function Card({name, price, img_url}){

    return(
        <Container>
            <img className="container__img-product" src={img_url} alt="imagem do produto"/>

            <h2 className="container__name">{name}</h2>

            <h3 className="container__price"> R$ {price}</h3>

            < ButtonSelected/>
        </Container>
    )
}

export default Card;