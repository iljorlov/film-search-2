import _, { uniqueId } from "lodash";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IndividualPersonMovieCreditsType } from "../actions/IndividualPerson/PersonMovieCreditsActionTypes";
import { Film } from "./cards/Film";
import { PersonFilm } from "./cards/PersonFilm";
import { LoaderSmall } from "./LoaderSmall";
import { NoFilmography } from "./NoFilmography";
import { v4 as uuidv4 } from "uuid";

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
              <>
                {_.isEmpty(moviesData![pathPersonId].crew) ? (
                  <NoFilmography />
                ) : (
                  <CardsContainer>
                    {moviesData![pathPersonId].crew.map((film) => (
                      <div key={uuidv4()} style={{ maxWidth: "20rem" }}>
                        <PersonFilm
                          title={film.title}
                          vote_average={film.vote_average}
                          poster_path={film.poster_path}
                          id={film.id}
                          release_date={film.release_date}
                          // key={film.id}
                          role={film.job}
                        />
                      </div>
                    ))}
                  </CardsContainer>
                )}
              </>
            ) : (
              <>
                {_.isEmpty(moviesData![pathPersonId].cast) ? (
                  <NoFilmography />
                ) : (
                  <CardsContainer>
                    {moviesData![pathPersonId].cast.map((film) => (
                      <div key={uuidv4()} style={{ maxWidth: "20rem" }}>
                        <Film
                          title={film.title}
                          vote_average={film.vote_average}
                          poster_path={film.poster_path}
                          id={film.id}
                          release_date={film.release_date}
                          // key={film.id}
                        />
                      </div>
                    ))}
                  </CardsContainer>
                )}
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  width: 100%;
`;
