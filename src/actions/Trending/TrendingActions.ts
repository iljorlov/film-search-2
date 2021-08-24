import axios from "axios";
import { Dispatch } from "redux";
import { TRENDING_FILMS_FAIL, TRENDING_FILMS_LOADING, TRENDING_FILMS_SUCCESS, TRENDING_PERSON_FAIL, TRENDING_PERSON_LOADING, TRENDING_PERSON_SUCCESS, TRENDING_TV_FAIL, TRENDING_TV_LOADING, TRENDING_TV_SUCCESS } from "./TrendingActionTypes";

const api_key = '6650890bc34e6b3eeefaf36590d2a82c'

export const GetTrendingFilms = (page: number = 1, timespan: string = 'day') => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TRENDING_FILMS_LOADING
    })

    const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/${timespan}?api_key=${api_key}&page=${page}`)

    dispatch({
      type: TRENDING_FILMS_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: TRENDING_FILMS_FAIL
    })
  }
}


export const GetTrendingPeople = (page: number = 1, timespan: string = 'day') => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TRENDING_PERSON_LOADING
    })

    const res = await axios.get(`https://api.themoviedb.org/3/trending/person/${timespan}?api_key=${api_key}&page=${page}`)

    dispatch({
      type: TRENDING_PERSON_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: TRENDING_PERSON_FAIL
    })
  }
}

export const GetTrendingTV = (page: number = 1, timespan: string = 'day') => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TRENDING_TV_LOADING
    })

    const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/${timespan}?api_key=${api_key}&page=${page}`)

    dispatch({
      type: TRENDING_TV_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: TRENDING_TV_FAIL
    })
  }
}

// https://api.themoviedb.org/3/movie/upcoming?api_key=6650890bc34e6b3eeefaf36590d2a82c&language=en-US&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=6650890bc34e6b3eeefaf36590d2a82c&language=en-US&page=1
// https://api.themoviedb.org/3/movie/top_rated?api_key=6650890bc34e6b3eeefaf36590d2a82c&language=en-US&page=1
// https://api.themoviedb.org/3/trending/movie/day?api_key=6650890bc34e6b3eeefaf36590d2a82c
// https://api.themoviedb.org/3/trending/all/week?api_key=6650890bc34e6b3eeefaf36590d2a82c