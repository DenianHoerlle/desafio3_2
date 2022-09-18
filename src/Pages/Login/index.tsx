import { Background, Logo, LoginForm } from "../../Components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import {AuthContext} from "../../context";

const ContainerLogin = styled.div`
    position: absolute;
    width: 31%;
    height: 55%;
    left: calc(50% - 31%/2);
    top: 25%;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    @media (max-width: 650px) {
        width: 55%;
        height:55%;
        left: calc(50% - 55%/2);
    }

    @media (min-width: 440px){
        height: 50%;
    }
`;
const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1em;
    margin-left: 10%;
    color: #FFFFFF;
`;
const TitleAfter = styled.div`
    position: relative;
    width: 100%;
    height: 0.5%;
    background-color: #FCFCFC;
    margin-bottom: 10%;

    @media (min-width: 550px){
        margin-bottom: 5%;
    }
`;

const TitleAfter2 = styled.div`
    display: block;
    margin-left: 9%;
    width: 20%;
    height: 1.5%;
    background-color: #4C1691;

    @media (max-width:630px){
        width: 35%
    }
    
    @media (min-width:630px){
        width: 30%
    }
`;

export default function Login() {
    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    function handleLogin() {
        setUser(userInput);
        navigate("/Home");
    }

    return (
        <div>
            <Background />
            <Logo />
            <ContainerLogin>
                <Title>Entrar</Title> <TitleAfter2 /> <TitleAfter />
                <LoginForm userInput={userInput} setUserInput={setUserInput} handleLogin={handleLogin} />
            </ContainerLogin>      
        </div>
    );
}



