import axios from "axios";
import { Dispatch } from "redux";
import {
  INDIVIDUAL_PERSON_TV_CREDITS_FAIL,
  INDIVIDUAL_PERSON_TV_CREDITS_LOADING,
  INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS,
  IndividualPersonTvCreditsDispatchTypes,
} from "./PersonTVCreditsActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetPersonTVs =
  (personId: number) =>
  async (dispatch: Dispatch<IndividualPersonTvCreditsDispatchTypes>) => {
    try {
      dispatch({
        type: INDIVIDUAL_PERSON_TV_CREDITS_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${api_key}&language=en-US`
      );
      dispatch({
        type: INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS,
        payload: result.data,
        personId: personId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: INDIVIDUAL_PERSON_TV_CREDITS_FAIL,
        errorMsg: error,
      });
    }
  };
