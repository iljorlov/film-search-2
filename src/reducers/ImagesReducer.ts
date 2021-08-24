import {
  ImagesDispatchTypes,
  IMAGES_SUCCESS,
  IMAGES_LOADING,
  IMAGES_FAIL,
  ImagesType,
} from "../actions/IndividualFilm/ImagesActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: ImagesType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const postersReducer = (
  state: DefaultStateI = defaultState,
  action: ImagesDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case IMAGES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case IMAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.filmId]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default postersReducer;
