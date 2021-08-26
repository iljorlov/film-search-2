import axios from "axios";
import { Dispatch } from "redux";
import { FILMS_FAIL, FILMS_LOADING, FILMS_SUCCESS } from "./SearchActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetFilmsList =
  (entry: string, page: number = 1) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FILMS_LOADING,
      });

      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${entry}&page=${page}&include_adult=false`
      );

      dispatch({
        type: FILMS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FILMS_FAIL,
      });
    }
  };
