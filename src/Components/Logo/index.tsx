import styled from "styled-components";

const Logoimg = styled.div`
    background-image: url(${require("../../assets/img/logo.png")});
    position: absolute;
    width: 20vw;
    height: 10vh;
    left: 7%;
    top: 10%;
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center
`;

export default function Logo(){
    return(
        <Logoimg /> 
    );
}