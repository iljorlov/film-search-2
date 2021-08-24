import {
  IndividualPersonTvCreditsDispatchTypes,
  INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS,
  INDIVIDUAL_PERSON_TV_CREDITS_LOADING,
  INDIVIDUAL_PERSON_TV_CREDITS_FAIL,
  IndividualPersonTvCreditsType,
} from "../../actions/IndividualPerson/PersonTVCreditsActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: IndividualPersonTvCreditsType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const personTVsReducer = (
  state: DefaultStateI = defaultState,
  action: IndividualPersonTvCreditsDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_PERSON_TV_CREDITS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case INDIVIDUAL_PERSON_TV_CREDITS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.personId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default personTVsReducer;
