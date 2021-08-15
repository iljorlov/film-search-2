import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilmType } from '../actions/PopularFilms/PopularFilmsActionTypes'
import { GetUpcomingFilms } from '../actions/UpcomingFilms/UpcomingFilmsActions'
import { Film } from '../components/Film'
import { RootStore } from '../Store'
import { FilmsList, Films } from './Home'

export const Upcoming = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetUpcomingFilms(1))
  }, [dispatch])

  const upcomingFilms = useSelector((state: RootStore) => state.upcomingFilms.upcoming)

  return (
    <>
      { upcomingFilms &&
        <FilmsList>
          <h2>Upcoming: </h2>
          <Films>
            {upcomingFilms?.results.map((film:FilmType) => (
              <Film 
                key={film.id}
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
