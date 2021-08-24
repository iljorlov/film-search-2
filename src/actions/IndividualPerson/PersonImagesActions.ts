import axios from "axios";
import { Dispatch } from "redux";
import {
  INDIVIDUAL_PERSON_IMAGES_FAIL,
  INDIVIDUAL_PERSON_IMAGES_LOADING,
  INDIVIDUAL_PERSON_IMAGES_SUCCESS,
  IndividualPersonImagesDispatchTypes,
} from "./PersonImagesActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetPersonImages =
  (personId: number) =>
  async (dispatch: Dispatch<IndividualPersonImagesDispatchTypes>) => {
    try {
      dispatch({
        type: INDIVIDUAL_PERSON_IMAGES_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/images?api_key=${api_key}`
      );
      dispatch({
        type: INDIVIDUAL_PERSON_IMAGES_SUCCESS,
        payload: result.data,
        personId: personId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: INDIVIDUAL_PERSON_IMAGES_FAIL,
        errorMsg: error,
      });
    }
  };
