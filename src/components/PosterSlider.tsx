import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GetPosters } from "../actions/IndividualFilm/ImagesActions";
import { RootStore } from "../Store";
import prev from "../svg/prev.svg";
import next from "../svg/next.svg";
import noPoster from "../svg/noPoster.svg";

interface PosterSliderProps {
  pathFilmId: number;
  altPosterPath: string;
}

export const PosterSlider: FC<PosterSliderProps> = ({
  pathFilmId,
  altPosterPath,
}) => {
  const dispatch = useDispatch();
  const [currentPoster, setCurrentPoster] = useState(0);
  const posters = useSelector((state: RootStore) => state.posters.data);
  // const postersLength = posters![pathFilmId].posters.length;

  const nextPoster = () => {
    const length = posters![pathFilmId].posters.length;
    setCurrentPoster(currentPoster < length - 1 ? currentPoster + 1 : 0);
  };

  const prevPoster = () => {
    const length = posters![pathFilmId].posters.length;
    setCurrentPoster(currentPoster !== 0 ? currentPoster - 1 : length - 1);
  };

  return (
    <SliderContainer>
      <Poster>
        <img
          key={altPosterPath}
          src={
            altPosterPath
              ? `https://image.tmdb.org/t/p/w500${altPosterPath}`
              : noPoster
          }
          alt="poster"
        />
      </Poster>
    </SliderContainer>
  );
};

const SliderContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Poster = styled(motion.div)`
  max-width: 80vw;
  img {
    height: inherit;
    border-radius: 1rem;
    height: auto;
    width: 70vw; //
    height: 105vw; // trying to prevent images from jumping
    object-fit: cover;
    border: 1px solid #e7e7e7;
    @media (min-width: 768px) {
      width: 20rem;
      height: 30rem;
    }
  }
`;
