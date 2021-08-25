import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import noPoster from "../../svg/noPoster.svg";

interface TVProps {
  name: string;
  vote_average: number;
  poster_path: string;
  first_air_date: string;
  id: number;
}

export const TV: FC<TVProps> = ({
  name,
  vote_average,
  poster_path,
  first_air_date,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  return (
    <StyledFilm
      transition={{ duration: 0.05 }}
      whileHover={{ scale: 1.025 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => history.push(`/tv/${id}/1`)}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : noPoster
        }
        alt="poster"
      />
      <CardBg
        initial={{ height: 0 }}
        animate={{
          height: isHovered ? "50%" : "0%",
          bottom: isHovered ? "0rem" : "10rem",
        }}
        transition={{ duration: 0.2 }}
      />
      <Description className="description">
        <motion.h5
          style={{
            color: `${isHovered ? "white" : "#333"}`,
          }}
        >
          {name}
        </motion.h5>
        <motion.p
          style={{
            color: `${isHovered ? "white" : "#333"}`,
          }}
        >
          {vote_average}/10
        </motion.p>
      </Description>
    </StyledFilm>
  );
};

const CardBg = styled(motion.div)`
  width: calc(100% - 2px);
  background-color: #333;
  position: absolute;
  border-radius: 0.5rem;
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
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.25);
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
    /* max-height: 19rem; */
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
`;
