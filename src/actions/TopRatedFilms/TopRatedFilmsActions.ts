import axios from "axios";
import { Dispatch } from "redux";
import {
  TOP_RATED_FILMS_FAIL,
  TOP_RATED_FILMS_LOADING,
  TOP_RATED_FILMS_SUCCESS,
} from "./TopRatedFilmsActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetTopRatedFilms =
  (page: number = 1) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: TOP_RATED_FILMS_LOADING,
      });

      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`
      );

      dispatch({
        type: TOP_RATED_FILMS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TOP_RATED_FILMS_FAIL,
      });
    }
  };

// https://api.themoviedb.org/3/movie/upcoming?api_key=6650890bc34e6b3eeefaf36590d2a82c&language=en-US&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=6650890bc34e6b3eeefaf36590d2a82c&language=en-US&page=1
// https://api.themoviedb.org/3/movie/top_rated?api_key=6650890bc34e6b3eeefaf36590d2a82c&language=en-US&page=1
// https://api.themoviedb.org/3/trending/all/day?api_key=6650890bc34e6b3eeefaf36590d2a82c
// https://api.themoviedb.org/3/trending/all/week?api_key=6650890bc34e6b3eeefaf36590d2a82c
