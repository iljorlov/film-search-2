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
import { TvType } from "../actions/Trending/TrendingActionTypes";
import { TV } from "./cards/TV";

export const RecommendedTVs = () => {
  // get current page number to pass into Pagination container and to dispatch
  const location = useLocation();
  const pathTVIndex = parseInt(location.pathname.split("/")[2]);
  const pathPageIndex = parseInt(location.pathname.split("/")[3]);

  const recommendedRef = useRef<HTMLDivElement>(null);
  const recRect = recommendedRef.current;
  let top: any = recRect?.getBoundingClientRect().y;

  const recommendedFilms = useSelector(
    (state: RootStore) => state.individualTV.data![pathTVIndex].recommendations
  );

  return (
    <>
      {recommendedFilms && (
        <>
          <FilmsList className="page">
            <h2 id="recommended" ref={recommendedRef}>
              Recommended:
            </h2>
            {recommendedFilms.total_pages > 0 ? (
              <Films>
                {recommendedFilms.results.map((film: TvType, index) => {
                  if (index === 20) {
                    return "";
                  } else {
                    return (
                      <TV
                        key={film.id}
                        id={film.id}
                        name={film.name}
                        vote_average={Math.round(film.vote_average * 10) / 10}
                        poster_path={film.poster_path}
                        first_air_date={film.first_air_date}
                      />
                    );
                  }
                })}
              </Films>
            ) : (
              <NoRecommendations />
            )}
          </FilmsList>
          {recommendedFilms.total_pages > 0 ? (
            <RecommendedPagination
              top={top}
              currentPage={recommendedFilms.page}
              totalPages={recommendedFilms.total_pages}
              filtration={"tv"}
              filmId={pathTVIndex}
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;
