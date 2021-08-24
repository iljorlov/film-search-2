import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FilmType } from "../actions/PopularFilms/PopularFilmsActionTypes";
import { GetUpcomingFilms } from "../actions/UpcomingFilms/UpcomingFilmsActions";
import { Film } from "../components/cards/Film";
import { Pagination } from "../components/Pagination";
import { RootStore } from "../Store";
import { FilmsList, Films } from "./Home";

export const Upcoming = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathCurrentPage = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    dispatch(GetUpcomingFilms(pathCurrentPage));
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

  // const currentPage = useSelector((state: RootStore) => state.popularFilms.popular?.page)
  // const totalPages = useSelector((state: RootStore) => state.popularFilms.popular?.total_pages)

  return (
    <>
      {topRatedFilms && (
        <>
          <FilmsList className="page">
            <h2>Upcoming: </h2>
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
  );
};
