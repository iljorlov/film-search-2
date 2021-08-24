import {
  IndividualPersonDispatchTypes,
  INDIVIDUAL_PERSON_SUCCESS,
  INDIVIDUAL_PERSON_LOADING,
  INDIVIDUAL_PERSON_FAIL,
  IndividualPersonType,
} from "../../actions/IndividualPerson/IndividualPersonActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: IndividualPersonType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const individualPersonReducer = (
  state: DefaultStateI = defaultState,
  action: IndividualPersonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_PERSON_FAIL:
      return {
        ...state,
        loading: false,
      };
    case INDIVIDUAL_PERSON_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INDIVIDUAL_PERSON_SUCCESS:
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

export default individualPersonReducer;
