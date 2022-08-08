import styled from "styled-components";

export const ContainerNav = styled.nav`
    position: relative;
    

    .containerNav__img{
        position: absolute;
        top: 15px;
        right: 20px;
        transition: 400ms ease;

        :hover{
            transform: scale(1.1);
        }
        cursor: pointer;
    }

    .containerNav__img--active{
        animation-name: active;
        animation-duration: 400ms;
        animation-direction: alternate-reverse;
    }

    @keyframes active {
        from{
            transform: translateX(0);
        }

        to{
            transform: translateY(-8px);
        }
    }

    .containerNav__button-quantity{
        width: fit-content;
        height: fit-content;
        padding: 4px 8px;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        top: 21px;
        right: 31px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`