import {Background, Container,Logo} from "../../Components";
import {useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../context";

export default function Login() {
    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(Context);

    function handleLogin() {
        setUser(userInput);
        navigate("/Home");
    }

    return (
        <div>
            <Background />
            <Logo/>
            <Container userInput={userInput} setUserInput={setUserInput} handleLogin={handleLogin} />
        </div>
    );
}



