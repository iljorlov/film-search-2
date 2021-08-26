import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { GetIndividualTV } from "../actions/IndividualTV/IndividualTVActions";
import { CastSlider } from "../components/CastSlider";
import { Loader } from "../components/Loader";
import { NoRecommendations } from "../components/NoRecommendations";
import { PosterSlider } from "../components/PosterSlider";
import { RecommendedFilms } from "../components/RecommendedFilms";
import { RecommendedTVs } from "../components/RecommendedTVs";
import { RootStore } from "../Store";
import star from "../svg/star.svg";

export const TVPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathTVId = parseInt(location.pathname.split("/")[2]);
  const pathPageId = parseInt(location.pathname.split("/")[3]);

  const loading = useSelector((state: RootStore) => state.individualTV.loading);
  const data = useSelector((state: RootStore) => state.individualTV.data);

  useEffect(() => {
    dispatch(GetIndividualTV(pathTVId, pathPageId));
    window.scrollTo(0, 0);
  }, [dispatch, pathTVId, pathPageId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TVContainer>
          {data && data![pathTVId] && (
            <>
              <TVHeader>
                <TVName>{data[pathTVId].name}</TVName>
                <SubnameInfo>
                  {data[pathTVId].first_air_date.split("-")[0]}
                  {data[pathTVId].next_episode_to_air
                    ? ` - ${
                        data[pathTVId].next_episode_to_air.air_date.split(
                          "-"
                        )[0]
                      }`
                    : ""}
                </SubnameInfo>
                <Tagline>{data[pathTVId].tagline}</Tagline>
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
                    <Duration>
                      <Seasons>
                        {data![pathTVId].number_of_seasons === 1
                          ? `${data![pathTVId].number_of_seasons} season`
                          : `${data![pathTVId].number_of_seasons} seasons`}
                      </Seasons>
                      <Episodes>
                        ({data![pathTVId].number_of_episodes} episodes)
                      </Episodes>
                    </Duration>
                  </RatingDuration>
                  <GenresContainer>
                    {data![pathTVId].genres.map((genre) => (
                      <Genre>{genre.name}</Genre>
                    ))}
                  </GenresContainer>
                </TVLeft>

                <TVRight>
                  <OverviewContainer>
                    <HeaderDiv>Overview:</HeaderDiv>
                    {data![pathTVId].overview ? (
                      <TVDescription>{data![pathTVId].overview}</TVDescription>
                    ) : (
                      <TVDescription>
                        There is no information yet...
                      </TVDescription>
                    )}
                  </OverviewContainer>
                  <HeaderDiv>Cast:</HeaderDiv>
                  {!_.isEmpty(data[pathTVId].credits.cast) ? (
                    <CastSlider
                      credits={data[pathTVId].credits}
                      toggle={"cast"}
                    />
                  ) : (
                    <TVDescription>
                      Unfortunately, we didn't find anything
                    </TVDescription>
                  )}

                  {/* {!_.isEmpty(data[pathTVId].credits.crew) && (
                <>
                  <HeaderDiv>Crew:</HeaderDiv>
                  <CastSlider
                    credits={data[pathTVId].credits}
                    toggle={"crew"}
                  />
                </>
              )} */}
                </TVRight>
              </TVBody>
            </>
          )}
        </TVContainer>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          {data && data![pathTVId] && data![pathTVId].recommendations ? (
            <RecommendedTVs />
          ) : (
            <NoRecommendations />
          )}
        </>
      )}
    </>
  );
};

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const TVContainer = styled.div`
  padding: 3rem 0rem;
  display: flex;
  flex-direction: column;
`;

const TVName = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
const SubnameInfo = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0rem;
  opacity: 0.7;
`;
const Tagline = styled.div``;

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
  padding: 1rem;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const TVRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem;
  @media (min-width: 768px) {
    width: 60%;
    margin: 0.5rem 3rem 0 0;
  }
`;

const TVBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 0.5rem;
  }
`;

const RatingDuration = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0rem 1rem;
  margin: 1rem;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const Duration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
`;

const Seasons = styled.div`
  display: flex;
  flex-direction: row;
`;
const Episodes = styled.div`
  display: flex;
  opacity: 0.5;
  margin-top: 0.2rem;
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

const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0.5rem 0rem 1rem 0rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const Genre = styled.div`
  color: #e0dede;
  background-color: #333;
  padding: 0.5rem;
  border: 1px solid transparent;
  margin: 0.25rem 0.5rem;
  border-radius: 1rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px #7676767f;
  &:hover {
    background-color: #e0dede;
    border: 1px solid #333;
    color: #333;
    transform: translateY(-5%);
    cursor: pointer;
  }
`;

const HeaderDiv = styled.div`
  font-size: 1.5rem;
  padding: 1.5rem 0rem 0rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (min-width: 768px) {
    padding: 0.5rem 0rem 0rem 1rem;
  }
`;

const TVDescription = styled.div`
  display: flex;
  text-align: justify;
  line-height: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  opacity: 0.8;
  border-left: 2px solid #333;
  padding: 0rem 1rem;
`;
