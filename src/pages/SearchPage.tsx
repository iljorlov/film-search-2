import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Film } from "../components/cards/Film";
import { RootStore } from "../Store";
import { motion } from "framer-motion";
import { FilmType } from "../actions/Search/SearchActionTypes";
import { Pagination } from "../components/Pagination";
import { useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { GetFilmsList } from "../actions/Search/SearchActions";

export const SearchPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathSearchEntry = location.pathname.split("/")[2];
  const currentPage = Number(location.pathname.split("/")[3]);

  // console.log(location.pathname.split("/")[1]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(GetFilmsList(pathSearchEntry, currentPage));
  }, [dispatch, pathSearchEntry, currentPage]);

  const data = useSelector((state: RootStore) => state.searchData.films.data);
  const dataLoading = useSelector(
    (state: RootStore) => state.searchData.films.loading
  );

  return (
    <>
      <PageHeader>Search results: </PageHeader>
      {dataLoading ? (
        <Loader />
      ) : (
        <>
          {data && data.results && currentPage <= data.total_pages && (
            <>
              <FilmsList>
                <Films>
                  {data.results.map((film: FilmType) => (
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
                totalPages={data.total_pages}
                filtration={`search/${pathSearchEntry}`}
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

export const FilmsList = styled(motion.div)`
  padding: 2rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export const Films = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
