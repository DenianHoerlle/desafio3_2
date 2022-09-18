import styled from "styled-components";


const MyButton = styled.button`
    position: absolute;
    width: 80%;

    background: #4C1691;
    border-radius: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 0.8em;
    line-height: 2em;
    color: #FFFFFF;
    text-align: center;
    margin:3%;
`;

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
