import styled from "styled-components";

export const ContainerBox = styled.div`
    position: relative;

    input{
        width: 250px;
        height: 30px;
        padding-left: 5px;
        border-radius: 8px;
        border: none;
        color: black;
        outline: 0;
    }

    .containerInput__button-search{
        background: #d90429;
        border-radius: 0px 10px 10px 0px;
        color: #f8f9fa;
        width: 28px;
        height: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -14px;
        top: 0;
        cursor: pointer;
    } 

    transform: translate(-97px,44px);

    @media (max-width: 767px) {
        transform: translate(calc(50vw - 139px), 44px);
    }
`;