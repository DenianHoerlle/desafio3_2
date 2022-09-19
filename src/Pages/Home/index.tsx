import NavBar from "../../Components/NavBar";
import SectionMovies from "../../Components/SectionMovie";
import { HomeStyle, Container, DivContainer }  from "./style";


import { useEffect, useState } from "react";
import api from "../../services/api";

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
        { name: "Populares na Cloneflix", route: "/trending/all/week?" },
        { name: "Melhores Avaliados", route: "/movie/top_rated?" },
        { name: "Lançamentos", route: "/movie/now_playing?" },
        { name: "Ação", route: "/discover/movie?with_genres=28&" },
        { name: "Ficção científica", route: "/discover/movie?with_genres=878&" },
        { name: "Romance", route: "/discover/movie?with_genres=10749&" },
    ];

    useEffect(() => {
        const URL_LANGUAGE_AND_KEY = `language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}&page=`;

        const urlsAxios = apiRoutes.map(({ route }, index) => {
            let pageRandom = "1";
            // Somente as três primeiras listas são randômicas
            if (index < 3) pageRandom = (Math.random() * (5 - 1) + 1).toString();

            const URL = route.concat(URL_LANGUAGE_AND_KEY).concat(pageRandom);
            return api.get(URL);
        });

        if (sectionsMovies.length === 0) {
            Promise.all([...urlsAxios])
                .then(responses => {
                    const responsesApi = responses.map((response, index) => ({
                        id: index,
                        name: apiRoutes[index].name,
                        movies: response.data.results,
                    }));
                    setSectionsMovies(responsesApi);
                })
                .catch(errors => {
                    console.log(errors);
                });
        }
    }, [apiRoutes, sectionsMovies]);

    return (
        <Container>
            <HomeStyle/>
            <NavBar />
            <DivContainer>
                {sectionsMovies.map(sectionMovie => (
                    <SectionMovies {...sectionMovie} key={sectionMovie.id} />
                ))}
            </DivContainer>
        </Container>
    );
};

export default Home;