import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import noPoster from "../../svg/noPoster.svg";

interface FilmProps {
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  id: number;
}

export const Film: FC<FilmProps> = ({
  title,
  vote_average,
  poster_path,
  release_date,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const history = useHistory();

  const shortenTitle = (title: string) => {
    let splittedTitle = title.split(" ");
    let newTitle = [];
    for (let i = 0; i < 9; i++) {
      if (i === 8) {
        newTitle.push(`${splittedTitle[i]}...`);
        break;
      }
      newTitle.push(`${splittedTitle[i]} `);
    }
    return newTitle.join("");
  };

  return (
    <StyledFilm
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => history.push(`/film/${id}/1`)}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : noPoster
        }
        alt="poster"
      />
      <CardBg className="card-bg" />
      <Description className="description">
        <motion.h5>
          {title.split("").length < 60 ? title : shortenTitle(title)}
        </motion.h5>
        <motion.p>{vote_average}/10</motion.p>
      </Description>
    </StyledFilm>
  );
};

const CardBg = styled(motion.div)`
  width: calc(100% - 2px);
  background-color: #606060;
  position: absolute;
  border-radius: 0.5rem;
  height: 1%;
  top: 10px;
  transition: all 0.2s ease;
`;

const StyledFilm = styled(motion.div)`
  border-radius: 1rem;
  z-index: 5;
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  /* justify-content: space-between; */
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.015);
    .card-bg {
      height: 100%;
    }
    h5 {
      color: #e1e1e1;
    }
    p {
      color: #d0d0d0;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  p {
    font-size: smaller;
    text-align: center;
  }
`;

const Description = styled(motion.div)`
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  max-height: 5rem;
  text-align: center;
  /* h5 {
    color: #e1e1e1;
  }
  p {
    color: #d0d0d0;
  } */
`;
