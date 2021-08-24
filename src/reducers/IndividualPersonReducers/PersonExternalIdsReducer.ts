import {
  IndividualPersonExIdDispatchTypes,
  INDIVIDUAL_PERSON_EXID_SUCCESS,
  INDIVIDUAL_PERSON_EXID_LOADING,
  INDIVIDUAL_PERSON_EXID_FAIL,
  IndividualPersonExIdType,
} from "../../actions/IndividualPerson/PersonExternalIdsActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: IndividualPersonExIdType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const personExternalIdsReducer = (
  state: DefaultStateI = defaultState,
  action: IndividualPersonExIdDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_PERSON_EXID_FAIL:
      return {
        ...state,
        loading: false,
      };
    case INDIVIDUAL_PERSON_EXID_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INDIVIDUAL_PERSON_EXID_SUCCESS:
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

export default personExternalIdsReducer;
