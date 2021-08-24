import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Film } from "../components/cards/Film";
import { RootStore } from "../Store";
import { motion } from "framer-motion";
import { FilmType } from "../actions/PopularFilms/PopularFilmsActionTypes";
import { useLocation } from "react-router-dom";
import { GetRecommendedFilms } from "../actions/IndividualFilm/RecommendedFilmsActions";
import { NoRecommendations } from "./NoRecommendations";
import { RecommendedPagination } from "./RecommendedPagination";

export const RecommendedFilms = () => {
  const dispatch = useDispatch();

  // get current page number to pass into Pagination container and to dispatch
  const location = useLocation();
  const pathFilmIndex = parseInt(location.pathname.split("/")[2]);
  const pathPageIndex = parseInt(location.pathname.split("/")[3]);

  const recommendedRef = useRef<HTMLDivElement>(null);
  const recRect = recommendedRef.current;
  let top: any = recRect?.getBoundingClientRect().y;

  useEffect(() => {
    dispatch(GetRecommendedFilms(pathFilmIndex, pathPageIndex));
  }, [dispatch, pathFilmIndex, pathPageIndex]);

  const recommendedFilms = useSelector(
    (state: RootStore) => state.recommendedFilms.data
  );

  return (
    <>
      {recommendedFilms && recommendedFilms[pathFilmIndex] && (
        <>
          <FilmsList className="page">
            <h2 id="recommended" ref={recommendedRef}>
              Recommended:
            </h2>
            {recommendedFilms![pathFilmIndex].total_pages > 0 ? (
              <Films>
                {recommendedFilms[pathFilmIndex].results.map(
                  (film: FilmType, index) => {
                    if (index === 20) {
                      return "";
                    } else {
                      return (
                        <Film
                          key={film.id}
                          id={film.id}
                          title={film.title}
                          vote_average={Math.round(film.vote_average * 10) / 10}
                          poster_path={film.poster_path}
                          release_date={film.release_date}
                        />
                      );
                    }
                  }
                )}
              </Films>
            ) : (
              <NoRecommendations />
            )}
          </FilmsList>
          {recommendedFilms![pathFilmIndex].total_pages > 0 ? (
            <RecommendedPagination
              top={top}
              currentPage={recommendedFilms[pathFilmIndex].page}
              totalPages={recommendedFilms[pathFilmIndex].total_pages}
              filtration={"film"}
              filmId={pathFilmIndex}
            />
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export const FilmsList = styled(motion.div)`
  padding: 1rem 2rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
`;

export const Films = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;
