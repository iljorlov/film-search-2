import {
  IndividualTVDispatchTypes,
  INDIVIDUAL_TV_FAIL,
  INDIVIDUAL_TV_LOADING,
  INDIVIDUAL_TV_SUCCESS,
  IndividualTVType,
} from "../../actions/IndividualTV/IndividualTVActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: IndividualTVType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const individualTVReducer = (
  state: DefaultStateI = defaultState,
  action: IndividualTVDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_TV_FAIL:
      return {
        ...state,
        loading: false,
      };
    case INDIVIDUAL_TV_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INDIVIDUAL_TV_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.tvId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default individualTVReducer;
