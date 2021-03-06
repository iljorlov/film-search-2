import { motion } from "framer-motion";
import React, { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

interface PaginationProps {
  currentPage: number | undefined;
  totalPages: number | undefined;
  filtration: string;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  filtration,
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
        <Link key={uuid()} to={`/${filtration}/${page}`}>
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
  width: 100%;
  overflow: hidden;
`;

const PaginationClicker = styled(motion.div)`
  cursor: pointer;
  margin: 0rem 1rem;
`;

const LinkContainer = styled(motion.div)`
  margin: 1rem 0.5rem;
  width: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 1rem;
  }
`;

const SelectedLinkContainer = styled(motion.div)`
  margin: 1rem 0.5rem;
  width: 1rem;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-size: larger;
  @media (max-width: 768px) {
  }
`;
