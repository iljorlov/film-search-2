import React from "react";
import styled from "styled-components";

export const NoFilmography = () => {
  return <NoFilmographyContainer>No Information</NoFilmographyContainer>;
};

const NoFilmographyContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  opacity: 0.7;
`;
