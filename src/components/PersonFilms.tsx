import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IndividualPersonMovieCreditsType } from "../actions/IndividualPerson/PersonMovieCreditsActionTypes";
import { Film } from "./cards/Film";
import { LoaderSmall } from "./LoaderSmall";

interface PersonFilmsI {
  moviesDataLoading: boolean;
  roleType: string;
  moviesData:
    | {
        [id: number]: IndividualPersonMovieCreditsType;
      }
    | undefined;
}

export const PersonFilms: FC<PersonFilmsI> = ({
  moviesDataLoading,
  moviesData,
  roleType,
}) => {
  const location = useLocation();
  const pathPersonId: number = Number(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );

  return (
    <div>
      <>
        {moviesDataLoading ? (
          <LoaderSmall />
        ) : (
          <>
            {roleType === "crew" ? (
              <CardsContainer>
                {moviesData![pathPersonId].crew.map((film) => (
                  <Film
                    title={film.title}
                    vote_average={film.vote_average}
                    poster_path={film.poster_path}
                    id={film.id}
                    release_date={film.release_date}
                    key={film.id}
                  />
                ))}
              </CardsContainer>
            ) : (
              <CardsContainer>
                {moviesData![pathPersonId].cast.map((film) => (
                  <div style={{ maxWidth: "20rem" }}>
                    <Film
                      title={film.title}
                      vote_average={film.vote_average}
                      poster_path={film.poster_path}
                      id={film.id}
                      release_date={film.release_date}
                      key={film.id}
                    />
                  </div>
                ))}
              </CardsContainer>
            )}
          </>
        )}
      </>
    </div>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  width: 100%;
`;
