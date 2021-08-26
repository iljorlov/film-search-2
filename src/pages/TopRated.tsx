import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FilmType } from "../actions/PopularFilms/PopularFilmsActionTypes";
import { GetTopRatedFilms } from "../actions/TopRatedFilms/TopRatedFilmsActions";
import { Film } from "../components/cards/Film";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination";
import { RootStore } from "../Store";
import { FilmsList, Films } from "./Home";

export const TopRated = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathCurrentPage = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    dispatch(GetTopRatedFilms(pathCurrentPage));
    window.scrollTo(0, 0);
  }, [dispatch, pathCurrentPage]);

  const topRatedFilms = useSelector(
    (state: RootStore) => state.topRatedFilms.topRated
  );
  const currentPage = useSelector(
    (state: RootStore) => state.topRatedFilms.topRated?.page
  );
  const totalPages = useSelector(
    (state: RootStore) => state.topRatedFilms.topRated?.total_pages
  );
  const topLoading = useSelector(
    (state: RootStore) => state.topRatedFilms.loading
  );

  return (
    <>
      {topLoading ? (
        <Loader />
      ) : (
        <>
          {topRatedFilms && (
            <>
              <PageHeader>Top Rated: </PageHeader>
              <FilmsList className="page">
                <Films>
                  {topRatedFilms?.results.map((film: FilmType) => (
                    <Film
                      key={film.id}
                      id={film.id}
                      title={film.title}
                      vote_average={film.vote_average}
                      poster_path={film.poster_path}
                      release_date={film.release_date}
                    />
                  ))}
                </Films>
              </FilmsList>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                filtration={"top_rated"}
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
