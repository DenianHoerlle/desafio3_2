import React, { useCallback, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
    Container,
    ContentMovies,
    Movie,
    ButtonLetf,
    ButtonRight,
} from "./styles";

interface SectionMoviesProps {
  movies: MovieProps[];
  name: string;
}

interface MovieProps {
  id: string;
  name?: string;
  title?: string;
  overview: string;
  poster_path: string;
}

const SectionMovies: React.FC<SectionMoviesProps> = ({ name, movies }) => {
    const [marginContent, setMarginContent] = useState(0);

    const MAX_WIDTH_CONTENT = useMemo(() => movies.length * 220, [movies]);

    const handleScrollMovies = useCallback(
        (direction: string) => {
            setMarginContent(stateMargin => {
                const newValue = stateMargin + (direction === "left" ? -400 : 400);

                const isError =
          MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 400;

                return isError ? stateMargin : newValue;
            });
        },
        [MAX_WIDTH_CONTENT],
    );

    return (
        <Container>
            <h1>{name}</h1>

            <ButtonLetf type="button" onClick={() => handleScrollMovies("right")}>
                <FaChevronLeft />
            </ButtonLetf>

            <ContentMovies
                style={{ marginLeft: marginContent, width: MAX_WIDTH_CONTENT }}
            >
                {movies.map(movie => (
                    <Movie key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={`Capa do filme/seriado ${movie.name}`}
                        />
                        <p>{movie.name}</p>
                    </Movie>
                ))}
            </ContentMovies>

            <ButtonRight type="button" onClick={() => handleScrollMovies("left")}>
                <FaChevronRight />
            </ButtonRight>
        </Container>
    );
};

export default SectionMovies;
