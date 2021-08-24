import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { GetTrendingTV } from '../actions/Trending/TrendingActions'
import { TvType } from '../actions/Trending/TrendingActionTypes'
import { Film } from '../components/cards/Film'
import { Pagination } from '../components/Pagination'
import { TV } from '../components/cards/TV'
import { RootStore } from '../Store'
import { FilmsList, Films } from './Home'

export const TrendingTV = () => {
  const dispatch = useDispatch()

  const location = useLocation()
  const pathCurrentPage = parseInt(location.pathname.split('/')[2])

  useEffect(() => {
    dispatch(GetTrendingTV(pathCurrentPage))
  }, [dispatch, pathCurrentPage])

  const trendingTV = useSelector((state: RootStore) => state.trendingTV.trendingTV)
  const currentPage = useSelector((state: RootStore) => state.trendingTV.trendingTV?.page)
  const totalPages = useSelector((state: RootStore) => state.trendingTV.trendingTV?.total_pages)

  // const currentPage = useSelector((state: RootStore) => state.popularFilms.popular?.page)
  // const totalPages = useSelector((state: RootStore) => state.popularFilms.popular?.total_pages)



  return (
    <>
      { trendingTV &&
        <>
          <FilmsList className='page'>
            <h2>Trending TV Shows: </h2>
            <Films>
              {trendingTV?.results.map((tv: TvType) => (
                <TV 
                  key={tv.id}
                  name={tv.name}
                  vote_average={tv.vote_average}
                  poster_path={tv.poster_path}
                  first_air_date={tv.first_air_date}
                  id={tv.id}
                />
              ))}
            </Films>
          </FilmsList>
          <Pagination currentPage={currentPage} totalPages={totalPages} filtration={'trending_tvs'}/>
        </>
      }
    </>
  )
}