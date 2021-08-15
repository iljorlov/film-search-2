import axios from "axios";
import { Dispatch } from "redux";
import { POPULAR_FILMS_FAIL, POPULAR_FILMS_LOADING, POPULAR_FILMS_SUCCESS } from "./PopularFilmsActionTypes";

const api_key = '6650890bc34e6b3eeefaf36590d2a82c'

export const GetPopularFilms = (page: number = 1) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: POPULAR_FILMS_LOADING
    })

    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`)

    dispatch({
      type: POPULAR_FILMS_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POPULAR_FILMS_FAIL
    })
  }
}