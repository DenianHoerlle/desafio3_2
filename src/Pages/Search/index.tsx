import React, { useEffect, useState, useContext } from "react";
import { NavBarSearch } from "../../Components/";
import SectionMovies from "../../Components/SectionMovie";
import { Context } from "../../context";

import api from "../../services/api";
import { Container, HomeStyle } from "../Home/style";

interface MovieProps {
    id: string;
    name?: string;
    title?: string;
    overview: string;
    poster_path: string;
}

interface SectionsMoviesProps {
    id: number;
    name: string;
    movies: MovieProps[];
}

const Search: React.FC = () => {
    const { search } = useContext(Context);
    const [sectionsMovies, setSectionsMovies] = useState<SectionsMoviesProps[]>(
        [],
    );

    const apiRoutes: { name: string; route: string }[] = [
        { name: "Resultados para Love", route: "/search/movie?" },
    ];

    useEffect(() => {
        const URL_LANGUAGE_AND_KEY = "api_key=680696aacd6dd222b951702b83ddb9e5&language=pt-BR&";
        const URL_QUERY = `&query=${search}&page=1`;
        console.log("search", search);
        if (search?.length) {
            const urlsAxios = apiRoutes.map(({ route }, index) => {
                let pageRandom = "1";
                // Somente as três primeiras listas são randômicas
                if (index < 10) pageRandom = (Math.random() * (5 - 1) + 1).toString();
                const URL = route.concat(URL_LANGUAGE_AND_KEY).concat(pageRandom).concat(URL_QUERY);
                return api.get(URL);
            });

            Promise.all([...urlsAxios]).then(responses => {
                const responsesApi = responses.map((response, index) => ({
                    id: index,
                    name: apiRoutes[index].name,
                    movies: response.data.results,
                }));

                setSectionsMovies(responsesApi);
            });
        }

    }, [search]);

    return (
        <>
            <HomeStyle />
            <NavBarSearch />
            <Container>
                {sectionsMovies.map(sectionMovie => (
                    <SectionMovies {...sectionMovie} key={sectionMovie.id} />
                ))}
            </Container>
        </>
    );
};

export default Search;
