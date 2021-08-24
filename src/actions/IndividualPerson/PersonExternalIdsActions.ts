import axios from "axios";
import { Dispatch } from "redux";
import {
  INDIVIDUAL_PERSON_EXID_FAIL,
  INDIVIDUAL_PERSON_EXID_LOADING,
  INDIVIDUAL_PERSON_EXID_SUCCESS,
  IndividualPersonExIdDispatchTypes,
} from "./PersonExternalIdsActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetPersonExternalIds =
  (personId: number) =>
  async (dispatch: Dispatch<IndividualPersonExIdDispatchTypes>) => {
    try {
      dispatch({
        type: INDIVIDUAL_PERSON_EXID_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/external_ids?api_key=${api_key}&language=en-US`
      );
      dispatch({
        type: INDIVIDUAL_PERSON_EXID_SUCCESS,
        payload: result.data,
        personId: personId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: INDIVIDUAL_PERSON_EXID_FAIL,
        errorMsg: error,
      });
    }
  };
