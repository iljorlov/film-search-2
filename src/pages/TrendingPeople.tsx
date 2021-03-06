import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GetTrendingPeople } from "../actions/Trending/TrendingActions";
import { PersonType } from "../actions/Trending/TrendingActionTypes";
import { Pagination } from "../components/Pagination";
import { Person } from "../components/cards/Person";
import { RootStore } from "../Store";
import { FilmsList, Films } from "./Home";
import { Loader } from "../components/Loader";
import styled from "styled-components";

export const TrendingPeople = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathCurrentPage = parseInt(location.pathname.split("/")[2]);

  useEffect(() => {
    dispatch(GetTrendingPeople(pathCurrentPage));
    window.scrollTo(0, 0);
  }, [dispatch, pathCurrentPage]);

  const trendingPeople = useSelector(
    (state: RootStore) => state.trendingPeople.trendingPersons
  );
  const currentPage = useSelector(
    (state: RootStore) => state.trendingPeople.trendingPersons?.page
  );
  const totalPages = useSelector(
    (state: RootStore) => state.trendingPeople.trendingPersons?.total_pages
  );
  const trendingPeopleLoading = useSelector(
    (state: RootStore) => state.trendingPeople.loading
  );

  return (
    <>
      {trendingPeopleLoading ? (
        <Loader />
      ) : (
        <>
          {trendingPeople && (
            <>
              <PageHeader>Trending People: </PageHeader>
              <FilmsList className="page">
                <Films>
                  {trendingPeople?.results.map((person: PersonType) => (
                    <Person
                      key={person.id}
                      name={person.name}
                      profile_path={person.profile_path}
                      id={person.id}
                    />
                  ))}
                </Films>
              </FilmsList>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                filtration={"trending_people"}
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
