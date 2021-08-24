import {
  IndividualPersonMovieCreditsDispatchTypes,
  INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS,
  INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING,
  INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL,
  IndividualPersonMovieCreditsType,
} from "../../actions/IndividualPerson/PersonMovieCreditsActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: { [id: number]: IndividualPersonMovieCreditsType };
}

const defaultState: DefaultStateI = {
  loading: false,
};

const personMoviesReducer = (
  state: DefaultStateI = defaultState,
  action: IndividualPersonMovieCreditsDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS:
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

export default personMoviesReducer;
