import {
  IndividualPersonImagesDispatchTypes,
  INDIVIDUAL_PERSON_IMAGES_FAIL,
  INDIVIDUAL_PERSON_IMAGES_SUCCESS,
  INDIVIDUAL_PERSON_IMAGES_LOADING,
  IndividualPersonImagesType,
} from "../../actions/IndividualPerson/PersonImagesActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: IndividualPersonImagesType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const personImagesReducer = (
  state: DefaultStateI = defaultState,
  action: IndividualPersonImagesDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_PERSON_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case INDIVIDUAL_PERSON_IMAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INDIVIDUAL_PERSON_IMAGES_SUCCESS:
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

export default personImagesReducer;
