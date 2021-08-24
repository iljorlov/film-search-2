import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { GetIndividualTV } from "../actions/IndividualTV/IndividualTVActions";
import { PosterSlider } from "../components/PosterSlider";
import { RootStore } from "../Store";
import star from "../svg/star.svg";

export const TVPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathTVId = parseInt(location.pathname.split("/")[2]);

  const data = useSelector((state: RootStore) => state.individualTV.data);

  useEffect(() => {
    dispatch(GetIndividualTV(pathTVId));
  });

  return (
    <TVContainer>
      {data && data![pathTVId] && (
        <>
          <TVHeader>
            <TVName>{data[pathTVId].name}</TVName>
            <SubnameInfo>{data[pathTVId].tagline}</SubnameInfo>
            <SubnameInfo>
              {data[pathTVId].first_air_date.split("-")[0]} -{" "}
              {data[pathTVId].next_episode_to_air.air_date.split("-")[0]}
            </SubnameInfo>
          </TVHeader>
          <TVBody>
            <TVLeft>
              <PosterSlider
                pathFilmId={pathTVId}
                altPosterPath={data[pathTVId].poster_path}
              />
              <RatingDuration>
                <RatingContainer>
                  <div className="rating">
                    <img src={star} alt="star" />
                    <div>
                      <b>{data![pathTVId].vote_average}</b>/10
                    </div>
                  </div>
                  <div className="votes">
                    ({data![pathTVId].vote_count} total votes)
                  </div>
                </RatingContainer>
                <SubnameInfo>
                  {data![pathTVId].number_of_seasons} seasons
                </SubnameInfo>
              </RatingDuration>
            </TVLeft>

            <TVRight>right</TVRight>
          </TVBody>
        </>
      )}
    </TVContainer>
  );
};

const TVContainer = styled.div`
  padding: 3rem 0rem;
  display: flex;
  flex-direction: column;
`;

const TVName = styled.div`
  font-size: 2rem;
`;
const SubnameInfo = styled.div``;

const TVHeader = styled.div`
  margin: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TVLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid green;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0rem 4rem;
    margin-right: 1rem;
  }
`;
const TVRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0.5rem 3rem 0 0;
  }
  border: 1px solid green;
`;

const TVBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const RatingDuration = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0rem 1rem;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  .rating {
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
  }
  .votes {
    display: flex;
    opacity: 0.5;
    margin-top: 0.2rem;
  }
  img {
    height: 1rem;
    padding-right: 0.5rem;
  }
`;
