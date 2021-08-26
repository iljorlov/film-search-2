import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GetIndividualPerson } from "../actions/IndividualPerson/IndividualPersonActions";
import { GetPersonImages } from "../actions/IndividualPerson/PersonImagesActions";
import styled from "styled-components";
import { GetPersonExternalIds } from "../actions/IndividualPerson/PersonExternalIdsActions";
import { GetPersonMovies } from "../actions/IndividualPerson/PersonMovieCreditsActions";
import { GetPersonTVs } from "../actions/IndividualPerson/PersonTVCreditsActions";
import { RootStore } from "../Store";
import { PosterSlider } from "../components/PosterSlider";
import { Loader } from "../components/Loader";
import { PersonFilmography } from "../components/PersonFilmography";
import IMDbIcon from "../svg/IMDb.svg";
import twitterIcon from "../svg/icons8-twitter.svg";
import instagramIcon from "../svg/icons8-instagram-logo.svg";
import facebookIcon from "../svg/icons8-facebook.svg";
import _ from "lodash";
import { LoaderSmall } from "../components/LoaderSmall";

export const PersonPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathPersonId = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    dispatch(GetIndividualPerson(pathPersonId));
    dispatch(GetPersonImages(pathPersonId));
    dispatch(GetPersonExternalIds(pathPersonId));
    dispatch(GetPersonMovies(pathPersonId));
    dispatch(GetPersonTVs(pathPersonId));
    window.scrollTo(0, 0);
  }, [dispatch, pathPersonId]);

  const personData = useSelector(
    (state: RootStore) => state.individualPerson.personData.data
  );
  const personLoading = useSelector(
    (state: RootStore) => state.individualPerson.personData.loading
  );

  const externalLinks = useSelector(
    (state: RootStore) => state.individualPerson.personExternalIds
  );

  return (
    <PersonContainer>
      {personLoading ? (
        <Loader />
      ) : (
        <>
          {personData && personData[pathPersonId] && (
            <>
              <PersonHeader>
                <PersonName>{personData[pathPersonId].name}</PersonName>
                {personData[pathPersonId].birthday ? (
                  <BirthDate>{personData[pathPersonId].birthday}</BirthDate>
                ) : (
                  <></>
                )}
              </PersonHeader>
              <PersonBody>
                <PersonLeft>
                  <PosterSlider
                    pathFilmId={0}
                    altPosterPath={personData[pathPersonId].profile_path}
                  />
                </PersonLeft>
                <PersonRight>
                  <HeaderDiv>Biography:</HeaderDiv>

                  {personData[pathPersonId].biography ? (
                    <Biography>{personData[pathPersonId].biography}</Biography>
                  ) : (
                    <Biography>Biography not found</Biography>
                  )}
                  <SubPhotoBio>
                    {personData[pathPersonId].place_of_birth ? (
                      <SubBioSection>
                        <SubBioHeader>Place of birth:</SubBioHeader>
                        <BirthPlace>
                          {personData[pathPersonId].place_of_birth}
                        </BirthPlace>
                      </SubBioSection>
                    ) : (
                      <></>
                    )}
                    {personData[pathPersonId].known_for_department ? (
                      <SubBioSection>
                        <SubBioHeader>Known for:</SubBioHeader>
                        <KnownFor>
                          {personData[pathPersonId].known_for_department}
                        </KnownFor>
                      </SubBioSection>
                    ) : (
                      <></>
                    )}
                  </SubPhotoBio>
                  <HeaderDiv style={{ marginTop: "2rem" }}>Links:</HeaderDiv>
                  {externalLinks.data &&
                  !_.isEmpty(externalLinks.data![pathPersonId]) ? (
                    <>
                      {externalLinks.loading ? (
                        <LoaderSmall />
                      ) : (
                        <ExternalIDs>
                          {externalLinks.data![pathPersonId].instagram_id ? (
                            <ExternalLink
                              href={`https://instagram.com/${
                                externalLinks.data![pathPersonId].instagram_id
                              }`}
                              target="_blank"
                            >
                              <img src={instagramIcon} height="25px" alt="" />
                            </ExternalLink>
                          ) : (
                            ""
                          )}

                          {externalLinks.data![pathPersonId].facebook_id ? (
                            <ExternalLink
                              href={`https://facebook.com/${
                                externalLinks.data![pathPersonId].facebook_id
                              }`}
                              target="_blank"
                            >
                              <img src={facebookIcon} height="25px" alt="" />
                            </ExternalLink>
                          ) : (
                            ""
                          )}
                          {externalLinks.data![pathPersonId].twitter_id ? (
                            <ExternalLink
                              href={`https://twitter.com/${
                                externalLinks.data![pathPersonId].twitter_id
                              }`}
                              target="_blank"
                            >
                              <img src={twitterIcon} height="25px" alt="" />
                            </ExternalLink>
                          ) : (
                            ""
                          )}
                          {externalLinks.data![pathPersonId].imdb_id ? (
                            <ExternalLink
                              href={`https://imdb.com/name/${
                                externalLinks.data![pathPersonId].imdb_id
                              }`}
                              target="_blank"
                            >
                              <img src={IMDbIcon} height="25px" alt="" />
                            </ExternalLink>
                          ) : (
                            ""
                          )}
                        </ExternalIDs>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </PersonRight>
              </PersonBody>
              <PersonFilmography />
            </>
          )}
        </>
      )}
    </PersonContainer>
  );
};

const ExternalLink = styled.a`
  display: flex;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 1rem;
  &:hover {
    transform: translateY(-5%);
    background-color: #c4c4c4;
  }
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const ExternalIDs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
  padding: 0rem 1rem;
  border-left: 2px solid #333;
`;

const SubPhotoBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  opacity: 0.8;
  margin-top: 1rem;
  border-left: 2px solid #333;
`;
const BirthDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0rem;
  opacity: 0.7;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const SubBioHeader = styled.div`
  opacity: 1;
  width: 15rem;
`;

const SubBioSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  padding: 0rem 1rem;
`;
const BirthPlace = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;
const KnownFor = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;

const Biography = styled.div`
  display: flex;
  text-align: justify;
  line-height: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  opacity: 0.8;
  border-left: 2px solid #333;
  padding: 0rem 1rem;
  max-height: 12rem;
  overflow: scroll;
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

const PersonContainer = styled.div`
  padding: 3rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PersonHeader = styled.div`
  margin: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PersonName = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const PersonLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  @media (min-width: 768px) {
    width: 40%;
    margin: 0rem 4rem;
    margin-right: 1rem;
  }
`;
const PersonRight = styled.div`
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

const PersonBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
