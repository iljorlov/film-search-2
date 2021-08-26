import {
  FilmsDispatchTypes,
  FilmSearchResultsType,
  FILMS_FAIL,
  FILMS_LOADING,
  FILMS_SUCCESS,
} from "../../actions/Search/SearchActionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: FilmSearchResultsType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const filmsSearchReducer = (
  state: DefaultStateI = defaultState,
  action: FilmsDispatchTypes
) => {
  switch (action.type) {
    case FILMS_FAIL:
      return {
        loading: false,
      };
    case FILMS_LOADING:
      return {
        loading: true,
      };
    case FILMS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default filmsSearchReducer;
