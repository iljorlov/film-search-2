import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { GetIndividualPerson } from "../actions/IndividualPerson/IndividualPersonActions";
import { GetPersonImages } from "../actions/IndividualPerson/PersonImagesActions";
import styled from "styled-components";
import { GetPersonExternalIds } from "../actions/IndividualPerson/PersonExternalIdsActions";
import { GetPersonMovies } from "../actions/IndividualPerson/PersonMovieCreditsActions";
import { GetPersonTVs } from "../actions/IndividualPerson/PersonTVCreditsActions";

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
  });

  return <PersonContainer>person page {pathPersonId}</PersonContainer>;
};

const PersonContainer = styled.div`
  background-color: grey;
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
`;
