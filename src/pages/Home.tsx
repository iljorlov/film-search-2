import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { GetPopularFilms } from '../actions/PopularFilmsActions';
import { FetchedPopularFilmsType } from '../actions/PopularFilmsActionTypes';
import { Film } from '../components/Film';
import { RootStore } from '../Store';
import { motion } from 'framer-motion';

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetPopularFilms(1))
  }, [dispatch])

  const popularFilms = useSelector((state: RootStore) => state.popularFilms.popular)
  console.log(popularFilms)

  return (
    <>
      { popularFilms &&
        <FilmsList>
          <h2>Popular: </h2>
          <Films>
            {popularFilms?.results.map(film => (
              <Film 
                title={film.title}
                vote_average={film.vote_average}
                poster_path={film.poster_path}
                release_date={film.release_date}
              />
            ))}
          </Films>
        </FilmsList>
      }
    </>
  )
}


const FilmsList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`

const Films = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`

