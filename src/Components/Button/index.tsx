import { MyButton } from "./styles";

interface Props{
    onClick?: ()=>void,
    type?: "button" | "submit" | "reset" | undefined,
    text: string,
}

export default function Button({onClick, type, text}:Props){
    return(
        <MyButton onClick={onClick} type={type}>{text}</MyButton>
    );
}
