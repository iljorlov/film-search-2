import React from "react";
import styled from "styled-components";

export const NoRecommendations = () => {
  return <NoRecContainer>No recommendations, sorry</NoRecContainer>;
};

const NoRecContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0rem;
`;
