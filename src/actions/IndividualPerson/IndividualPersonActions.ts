import axios from "axios";
import { Dispatch } from "redux";
import {
  INDIVIDUAL_PERSON_FAIL,
  INDIVIDUAL_PERSON_LOADING,
  INDIVIDUAL_PERSON_SUCCESS,
  IndividualPersonDispatchTypes,
} from "./IndividualPersonActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetIndividualPerson =
  (personId: number) =>
  async (dispatch: Dispatch<IndividualPersonDispatchTypes>) => {
    try {
      dispatch({
        type: INDIVIDUAL_PERSON_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${api_key}&language=en-US`
      );
      dispatch({
        type: INDIVIDUAL_PERSON_SUCCESS,
        payload: result.data,
        personId: personId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: INDIVIDUAL_PERSON_FAIL,
        errorMsg: error,
      });
    }
  };
