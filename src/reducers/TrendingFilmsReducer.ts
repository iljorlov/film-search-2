import {
  TrendingFilmsDispatchTypes,
  TRENDING_FILMS_FAIL,
  TRENDING_FILMS_LOADING,
  TRENDING_FILMS_SUCCESS,
  FetchedTrendingFilmsType,
} from "../actions/Trending/TrendingActionTypes";

interface DefaultStateI {
  loading: boolean;
  trendingFilms?: FetchedTrendingFilmsType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const trendingFilmsReducer = (
  state: DefaultStateI = defaultState,
  action: TrendingFilmsDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case TRENDING_FILMS_FAIL:
      return {
        loading: false,
      };
    case TRENDING_FILMS_LOADING:
      return {
        loading: true,
      };
    case TRENDING_FILMS_SUCCESS:
      return {
        loading: false,
        trendingFilms: action.payload,
      };
    default:
      return state;
  }
};

export default trendingFilmsReducer;
