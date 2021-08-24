import axios from "axios";
import { Dispatch } from "redux";
import {
  INDIVIDUAL_TV_FAIL,
  INDIVIDUAL_TV_LOADING,
  INDIVIDUAL_TV_SUCCESS,
  IndividualTVDispatchTypes,
} from "./IndividualTVActionTypes";

const api_key = "6650890bc34e6b3eeefaf36590d2a82c";

export const GetIndividualTV =
  (tvId: number) => async (dispatch: Dispatch<IndividualTVDispatchTypes>) => {
    try {
      dispatch({
        type: INDIVIDUAL_TV_LOADING,
        errorMsg: "",
      });

      let result = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${api_key}&language=en-US&include_image_language=en&append_to_response=credits%2Cimages%2Cvideos%2Crecommendations`
      );
      dispatch({
        type: INDIVIDUAL_TV_SUCCESS,
        payload: result.data,
        tvId: tvId,
        errorMsg: "",
      });
    } catch (error) {
      dispatch({
        type: INDIVIDUAL_TV_FAIL,
        errorMsg: error,
      });
    }
  };
