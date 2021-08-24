import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { GetPopularFilms } from '../actions/PopularFilms/PopularFilmsActions';
import { Film } from '../components/cards/Film';
import { RootStore } from '../Store';
import { motion } from 'framer-motion';
import { FilmType } from '../actions/PopularFilms/PopularFilmsActionTypes';
import { Pagination } from '../components/Pagination';
import { useLocation } from 'react-router-dom';

export const Home = () => {

  const dispatch = useDispatch()

  // get current page number to pass into Pagination container and to dispatch
  const location = useLocation()
  const pathCurrentPage = parseInt(location.pathname.split('/')[2])

  useEffect(() => {
    dispatch(GetPopularFilms(pathCurrentPage))
  }, [dispatch, pathCurrentPage])

  const popularFilms = useSelector((state: RootStore) => state.popularFilms.popular)
  const currentPage = useSelector((state: RootStore) => state.popularFilms.popular?.page)
  const totalPages = useSelector((state: RootStore) => state.popularFilms.popular?.total_pages)
  

  return (
    <>
      { popularFilms && currentPage && totalPages &&
        <>
        <FilmsList className='page'>
          <h2>Popular: </h2>
          <Films>
            {popularFilms?.results.map((film:FilmType) => (
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
        <Pagination currentPage={currentPage} totalPages={totalPages} filtration={'popular'}/>
        </>
      }
    </>
  )
}


export const FilmsList = styled(motion.div)`
  padding: 2rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`

export const Films = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`

