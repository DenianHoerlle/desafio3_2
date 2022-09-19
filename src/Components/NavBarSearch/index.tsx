import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../FormLogin/styles";

import { Container, RoutesMenu, Profile } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavBarSearch: React.FC = () => {
    const [isBlack, setIsBlack] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => setIsBlack(window.scrollY > 10));

        // Executa quando a pagina for desconstruida
        return () => {
            window.removeEventListener("scroll", () =>
                setIsBlack(window.scrollY > 10),
            );
        };
    }, []);

    const navigate = useNavigate();

    function handleSearch(){
        navigate("/Search");
    }

    return (
        <Container isBlack={isBlack}>
            <RoutesMenu>
                <img src={require("../../assets/img/logo.png")} alt="dahdjahdkja" />
                <ul>
                    <li style={{ fontWeight: "bold" }}>Inicio</li>
                    <li>Series</li>
                    <li>Filmes</li>
                </ul>
            </RoutesMenu>
            <Profile>
                <FormLogin handleSearch={handleSearch} />
                <FaBell />
                <button type="button">
                    <p>{}</p>
                </button>
            </Profile>
        </Container>
    );
};

export default NavBarSearch;



