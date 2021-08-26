import React from "react";
import styled, { keyframes } from "styled-components";

export const LoaderSmall = () => {
  return (
    <LoaderContainer>
      <OuterDiv>
        <InnerDiv></InnerDiv>
      </OuterDiv>
    </LoaderContainer>
  );
};

const PulseAnimation = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.75) }
  100% { transform: scale(1) }
`;

const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OuterDiv = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #a1a1a1;
  position: relative;
  animation-name: ${PulseAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
const InnerDiv = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  border-radius: 50%;
  background-color: #6f6f6f;
  animation-name: ${PulseAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 1.5s;
`;
