import styled from "styled-components";
import Button from "../Button";

const FormLogin = styled.form`

    box-sizing: border-box;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
`;
const Item = styled.input`
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
const Item1 = styled(Item)`
    background-image: url(${require("../../assets/img/iconp.png")});
    background-repeat: no-repeat;
    background-size: 1.3em;
    padding-left: 3em;
    background-position-x: 10px;
    background-position-y: 7px;
`;

const Item2 = styled(Item)`
    background-image: url(${require("../../assets/img/icons.png")});
    background-repeat: no-repeat;
    background-size: 1.3em;
    padding-left: 3em;
    background-position-x: 10px;
    background-position-y: 7px;
`;


const Divmy = styled.div`
    display: flex;
    justify-content:center;
`;


interface Props{
    handleLogin?: ()=>void
    userInput: string;
    setUserInput : React.Dispatch<React.SetStateAction<string>>
}

export default function LoginForm({handleLogin, userInput, setUserInput}:Props){
    return(
        <FormLogin onSubmit={handleLogin}>
            <Divmy>
                <Item1 value={userInput} onChange={setUserInput} type="text" required name="name" id="name" aria-describedby="User name" placeholder="Nome de usuário" />
            </Divmy>
            <Divmy>
                <Item2 type="password" required name="password" id="password" placeholder="Senha" />
            </Divmy> 
            <Divmy>
                <Button type="submit" text="Entrar"/>   
            </Divmy>              
        </FormLogin>
        
    );
}