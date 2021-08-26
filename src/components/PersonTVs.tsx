import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IndividualPersonMovieCreditsType } from "../actions/IndividualPerson/PersonMovieCreditsActionTypes";
import { IndividualPersonTvCreditsType } from "../actions/IndividualPerson/PersonTVCreditsActionTypes";
import { TV } from "./cards/TV";
import { LoaderSmall } from "./LoaderSmall";

interface PersonTVsI {
  tvsDataLoading: boolean;
  roleType: string;
  tvData:
    | {
        [id: number]: IndividualPersonTvCreditsType;
      }
    | undefined;
}

export const PersonTVs: FC<PersonTVsI> = ({
  tvsDataLoading,
  tvData,
  roleType,
}) => {
  const location = useLocation();
  const pathPersonId: number = Number(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );

  return (
    <div>
      <>
        {tvsDataLoading ? (
          <LoaderSmall />
        ) : (
          <>
            {roleType === "crew" ? (
              <CardsContainer>
                {tvData![pathPersonId].crew.map((tv) => (
                  <div style={{ maxWidth: "20rem" }}>
                    <TV
                      name={tv.name}
                      vote_average={tv.vote_average}
                      poster_path={tv.poster_path}
                      id={tv.id}
                      first_air_date={tv.first_air_date}
                      key={tv.id}
                    />
                  </div>
                ))}
              </CardsContainer>
            ) : (
              <CardsContainer>
                {tvData![pathPersonId].cast.map((tv) => (
                  <div style={{ maxWidth: "20rem" }}>
                    <TV
                      name={tv.name}
                      vote_average={tv.vote_average}
                      poster_path={tv.poster_path}
                      id={tv.id}
                      first_air_date={tv.first_air_date}
                      key={tv.id}
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
