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
                  <SubPhotoBio>
                    {personData[pathPersonId].birthday ? (
                      <BirthDate>{`Date of birth: ${personData[pathPersonId].birthday}`}</BirthDate>
                    ) : (
                      <></>
                    )}

                    {personData[pathPersonId].place_of_birth ? (
                      <BirthPlace>
                        {`Place of birth: ${personData[pathPersonId].place_of_birth}`}
                      </BirthPlace>
                    ) : (
                      <></>
                    )}
                    {personData[pathPersonId].known_for_department ? (
                      <KnownFor>
                        {`Known for: ${personData[pathPersonId].known_for_department}`}
                      </KnownFor>
                    ) : (
                      <></>
                    )}
                  </SubPhotoBio>
                  {personData[pathPersonId].biography ? (
                    <Biography>{personData[pathPersonId].biography}</Biography>
                  ) : (
                    <Biography>No information found</Biography>
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

const SubPhotoBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0.8;
  margin-top: 1rem;
`;
const BirthDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0rem 1rem;
  margin: 1rem 0 0 0rem;
  border-left: 2px solid #333;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;
const BirthPlace = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0rem 1rem;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0 0 0rem;
  border-left: 2px solid #333;
  @media (min-width: 768px) {
    max-width: 20rem;
  }
`;
const KnownFor = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0rem 1rem;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0 0 0rem;
  border-left: 2px solid #333;
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
    margin: 0rem 3rem 0 0;
  }
`;

const PersonBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
