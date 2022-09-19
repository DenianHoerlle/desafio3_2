/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import SectionMovies from "../../Components/SectionMovie";

import api from "../../services/api";
import { Container, HomeStyle } from "./style";

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

const Home: React.FC = () => {
    const [sectionsMovies, setSectionsMovies] = useState<SectionsMoviesProps[]>(
        [],
    );

    const apiRoutes: { name: string; route: string }[] = [
        { name: "Em alta", route: "/tv/popular?" },
        { name: "Populares", route: "/trending/all/week?" },
        { name: "Melhores Avaliados", route: "/movie/top_rated?" },
        { name: "Lançamentos", route: "/movie/now_playing?" },
        { name: "Ação", route: "/discover/movie?with_genres=28&" },
        { name: "Ficção científica", route: "/discover/movie?with_genres=878&" },
        { name: "Romance", route: "/discover/movie?with_genres=10749&" },
    ];

    useEffect(() => {
        const URL_LANGUAGE_AND_KEY = "api_key=680696aacd6dd222b951702b83ddb9e5&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=";
        const urlsAxios = apiRoutes.map(({ route }, index) => {
            let pageRandom = "1";
            if (index < 10) pageRandom = (Math.random() * (5 - 1) + 1).toString();

            const URL = route.concat(URL_LANGUAGE_AND_KEY).concat(pageRandom);
            return api.get(URL);
        });

        if (sectionsMovies.length === 0) {
            Promise.all([...urlsAxios]).then(responses => {
                const responsesApi = responses.map((response, index) => ({
                    id: index,
                    name: apiRoutes[index].name,
                    movies: response.data.results,
                }));

                setSectionsMovies(responsesApi);
            });
        }
    }, [apiRoutes, sectionsMovies]);

    return (
        <>
            <HomeStyle />
            <NavBar />
            <Container>
                {sectionsMovies.map(sectionMovie => (
                    <SectionMovies {...sectionMovie} key={sectionMovie.id} />
                ))}
            </Container>
        </>
    );
};

export default Home;