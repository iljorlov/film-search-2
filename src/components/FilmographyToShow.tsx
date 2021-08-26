import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootStore } from "../Store";
import { PersonFilms } from "./PersonFilms";
import { PersonTVs } from "./PersonTVs";

interface FilmographyToShowI {
  mediaType: string;
  roleType: string;
}

export const FilmographyToShow: FC<FilmographyToShowI> = ({
  mediaType,
  roleType,
}) => {
  const moviesDataLoading = useSelector(
    (state: RootStore) => state.individualPerson.personMovies.loading
  );
  const moviesData = useSelector(
    (state: RootStore) => state.individualPerson.personMovies.data
  );

  const tvDataLoading = useSelector(
    (state: RootStore) => state.individualPerson.personTVs.loading
  );
  const tvData = useSelector(
    (state: RootStore) => state.individualPerson.personTVs.data
  );

  return (
    <FilmographyToShowContainer>
      {/* {roleType} {mediaType} */}
      {mediaType === "films" ? (
        <PersonFilms
          moviesDataLoading={moviesDataLoading}
          moviesData={moviesData}
          roleType={roleType}
        />
      ) : (
        <PersonTVs
          tvsDataLoading={tvDataLoading}
          tvData={tvData}
          roleType={roleType}
        />
        // <PersonTVs tvDataLoading={tvDataLoading} tvData={tvData} />
      )}
    </FilmographyToShowContainer>
  );
};

const FilmographyToShowContainer = styled.div`
  width: 100%;
  padding: 2rem;
`;
