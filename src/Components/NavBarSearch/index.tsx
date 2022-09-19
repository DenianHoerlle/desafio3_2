import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormSearch } from "../";
import { FaSearch, FaBell } from "react-icons/fa";
import { Context } from "../../context";

import { Container, RoutesMenu, Profile } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavBarSearch: React.FC = () => {
    const { setSearch } = useContext(Context);
    const [isBlack, setIsBlack] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => setIsBlack(window.scrollY > 10));

        // Executa quando a pagina for desconstruida
        return () => {
            window.removeEventListener("scroll", () =>
                setIsBlack(window.scrollY > 10),
            );
        };
    }, []);

    function handleSearch() {
        setSearch(searchInput);
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
                <FormSearch setSearchInput={setSearchInput} searchInput={searchInput} />
                <button onClick={() => handleSearch()} >
                    <FaSearch />
                </button>
                <FaBell />
            </Profile>
        </Container>
    );
};

export default NavBarSearch;
