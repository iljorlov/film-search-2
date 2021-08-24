import axios from "axios";
import { Dispatch } from "redux";
import {
  IMAGES_FAIL,
  IMAGES_LOADING,
  IMAGES_SUCCESS,
  ImagesDispatchTypes,
} from "./ImagesActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetPosters =
  (filmId: number) => async (dispatch: Dispatch<ImagesDispatchTypes>) => {
    try {
      dispatch({
        type: IMAGES_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}/images?api_key=${api_key}&language=en-US&include_image_language=en`
      );
      dispatch({
        type: IMAGES_SUCCESS,
        payload: result.data,
        filmId: filmId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: IMAGES_FAIL,
        errorMsg: error,
      });
    }
  };
