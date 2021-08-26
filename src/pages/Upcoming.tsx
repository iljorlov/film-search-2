import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FilmType } from "../actions/PopularFilms/PopularFilmsActionTypes";
import { GetUpcomingFilms } from "../actions/UpcomingFilms/UpcomingFilmsActions";
import { Film } from "../components/cards/Film";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { RootStore } from "../Store";
import { FilmsList, Films } from "./Home";

export const Upcoming = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathCurrentPage = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    dispatch(GetUpcomingFilms(pathCurrentPage));
    window.scrollTo(0, 0);
  }, [dispatch, pathCurrentPage]);

  const topRatedFilms = useSelector(
    (state: RootStore) => state.upcomingFilms.upcoming
  );
  const currentPage = useSelector(
    (state: RootStore) => state.upcomingFilms.upcoming?.page
  );
  const totalPages = useSelector(
    (state: RootStore) => state.upcomingFilms.upcoming?.total_pages
  );
  const upcomingLoading = useSelector(
    (state: RootStore) => state.upcomingFilms.loading
  );

  return (
    <>
      {upcomingLoading ? (
        <Loader />
      ) : (
        <>
          {topRatedFilms && (
            <>
              <PageHeader>Upcoming: </PageHeader>
              <FilmsList className="page">
                <Films>
                  {topRatedFilms?.results.map((film: FilmType) => (
                    <Film
                      key={film.id}
                      title={film.title}
                      vote_average={film.vote_average}
                      poster_path={film.poster_path}
                      release_date={film.release_date}
                      id={film.id}
                    />
                  ))}
                </Films>
              </FilmsList>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                filtration={"upcoming"}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

const PageHeader = styled.h2`
  padding: 5rem 2rem 2rem 2rem;
  text-align: left;
  width: 100%;
`;
