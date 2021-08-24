import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

interface PaginationProps {
  currentPage: number | undefined;
  totalPages: number | undefined;
  filtration: string;
  filmId: number;
  top: number;
}

export const RecommendedPagination: FC<PaginationProps> = ({
  top,
  currentPage,
  totalPages,
  filtration,
  filmId,
}) => {
  const windowsNumber = Math.ceil(totalPages! / 10);
  const paginationWindows: any = [];
  for (let window = 0; window < windowsNumber; window++) {
    paginationWindows.push([]);
    for (let page = 1; page < 11; page++) {
      if (page + window * 10 > totalPages!) {
        break;
      }
      paginationWindows[paginationWindows.length - 1].push(page + window * 10);
    }
  }

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [currentWindow, setCurrentWindow] = useState(
    currentPage! % 10 !== 0
      ? Math.floor(currentPage! / 10)
      : Math.floor(currentPage! / 10) - 1
  );

  const handlePreviousClick = () => {
    if (currentWindow > 0) {
      setCurrentWindow(currentWindow - 1);
    }
  };
  const handleNextClick = () => {
    if (currentWindow < windowsNumber - 1) {
      setCurrentWindow(currentWindow + 1);
    }
  };

  return (
    <PaginationContainer className="pagination">
      <PaginationClicker onClick={handlePreviousClick}>&lt;</PaginationClicker>
      {paginationWindows[currentWindow].map((page: number) => (
        <Link
          key={uuid()}
          to={`/${filtration}/${filmId}/${page}`}
          onClick={() => scroll()}
        >
          {currentPage === page ? (
            <SelectedLinkContainer> {page} </SelectedLinkContainer>
          ) : (
            <LinkContainer> {page} </LinkContainer>
          )}
        </Link>
      ))}
      <PaginationClicker onClick={handleNextClick}>&gt;</PaginationClicker>
    </PaginationContainer>
  );
};

const PaginationContainer = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0rem;
`;

const PaginationClicker = styled(motion.div)`
  cursor: pointer;
  margin: 0rem 0.5rem;
  cursor: pointer;
`;

const LinkContainer = styled(motion.div)`
  margin: 1rem 0.5rem;
  width: 2rem;
  text-align: center;
  position: relative;
`;

const SelectedLinkContainer = styled(motion.div)`
  margin: 1rem 0.5rem;
  width: 2rem;
  text-align: center;
  position: relative;
  color: #333;
  font-weight: bold;
  font-size: larger;
`;
