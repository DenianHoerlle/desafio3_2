import styled from "styled-components";

export const FormLogin = styled.form`
    box-sizing: border-box;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`;
export const Item = styled.input`
    width: 80%;
    box-sizing: border-box;
    padding: 3%;
    background-color: #000;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 3%;
    color: #FFFFFF;
`;
export const Item1 = styled(Item)`
    background-image: url(${require("../../assets/img/iconp.png")});
    background-repeat: no-repeat;
    background-size: 1.3em;
    padding-left: 3em;
    background-position-x: 10px;
    background-position-y: 7px;
`;

export const Item2 = styled(Item)`
    background-image: url(${require("../../assets/img/icons.png")});
    background-repeat: no-repeat;
    background-size: 1.3em;
    padding-left: 3em;
    background-position-x: 10px;
    background-position-y: 7px;
`;


export const Divmy = styled.div`
    display: flex;
    justify-content:center;
`;
