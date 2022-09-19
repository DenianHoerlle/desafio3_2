import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {AuthContext} from "../../context";
import {BackgroundImg, ContainerLogin, Title, TitleAfter, TitleAfter2, Logoimg} from "./style";
import { LoginForm } from "../../Components";


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
            <BackgroundImg />
            <Logoimg />
            <ContainerLogin>
                <Title>Entrar</Title> <TitleAfter2 /> <TitleAfter />
                <LoginForm userInput={userInput} setUserInput={setUserInput} handleLogin={handleLogin} />
            </ContainerLogin>      
        </div>
    );
}



