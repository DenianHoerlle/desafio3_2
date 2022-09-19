import React, { useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Container, RoutesMenu, Profile } from "./styles";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
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

    return (
        <Container isBlack={isBlack}>
            <RoutesMenu>
                <img src={require("../../assets/img/logo.png")} alt="logo" onClick={() => navigate("/Home", { replace: true })} />
                <ul>
                    <li style={{ fontWeight: "bold" }}>Inicio</li>
                    <li>Series</li>
                    <li>Filmes</li>
                </ul>
            </RoutesMenu>
            <Profile>
                <button onClick={() => {
                    navigate("/Search", { replace: true });
                }}>
                    <FaSearch />
                </button>
                <FaBell />
            </Profile>
        </Container>
    );
};

export default NavBar;
