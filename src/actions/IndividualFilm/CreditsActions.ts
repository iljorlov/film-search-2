import axios from "axios";
import { Dispatch } from "redux";
import {
  CREDITS_FAIL,
  CREDITS_LOADING,
  CREDITS_SUCCESS,
  CreditsDispatchTypes,
} from "./CreditsActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetCredits =
  (filmId: number) => async (dispatch: Dispatch<CreditsDispatchTypes>) => {
    try {
      dispatch({
        type: CREDITS_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${api_key}&language=en-US`
      );
      dispatch({
        type: CREDITS_SUCCESS,
        payload: result.data,
        filmId: filmId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: CREDITS_FAIL,
        errorMsg: error,
      });
    }
  };
