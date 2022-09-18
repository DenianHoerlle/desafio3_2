import styled from "styled-components";

const BackgroundImg = styled.div`
    background-image: url(${require("../../assets/img/backimg.png")});
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background-repeat: no-repeat;
    background-size: 110%; 
    background-position: center
`;

export default function Background(){
    return(
        <BackgroundImg /> 
    );
}