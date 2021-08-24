import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FilmType } from "../actions/PopularFilms/PopularFilmsActionTypes";
import { GetTrendingFilms } from "../actions/Trending/TrendingActions";
import { Film } from "../components/cards/Film";
import { Pagination } from "../components/Pagination";
import { RootStore } from "../Store";
import { FilmsList, Films } from "./Home";

export const TrendingFilms = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathCurrentPage = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    dispatch(GetTrendingFilms(pathCurrentPage));
  }, [dispatch, pathCurrentPage]);

  const trendingFilms = useSelector(
    (state: RootStore) => state.trendingFilms.trendingFilms
  );
  const currentPage = useSelector(
    (state: RootStore) => state.trendingFilms.trendingFilms?.page
  );
  const totalPages = useSelector(
    (state: RootStore) => state.trendingFilms.trendingFilms?.total_pages
  );

  // const currentPage = useSelector((state: RootStore) => state.popularFilms.popular?.page)
  // const totalPages = useSelector((state: RootStore) => state.popularFilms.popular?.total_pages)

  return (
    <>
      {trendingFilms && (
        <>
          <FilmsList className="page">
            <h2>Trending Films: </h2>
            <Films>
              {trendingFilms?.results.map((film: FilmType) => (
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
            filtration={"trending_films"}
          />
        </>
      )}
    </>
  );
};
