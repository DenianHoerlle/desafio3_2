import Button from "../Button";
import { Divmy, FormLogin, Item1, Item2 } from "./styles";


interface Props{
    handleLogin?: ()=>void;
    userInput: string;
    setUserInput : any;
}

export default function LoginForm({handleLogin, userInput, setUserInput}:Props){
    return(
        <FormLogin onSubmit={handleLogin}>
            <Divmy>
                <Item1 value={userInput} onChange={({target}) => setUserInput(target.value)} type="text" required name="name" id="name" aria-describedby="User name" placeholder="Nome de usuário" />
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