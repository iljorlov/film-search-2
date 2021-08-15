import { TopRatedFilmsDispatchTypes, TOP_RATED_FILMS_FAIL, TOP_RATED_FILMS_SUCCESS, TOP_RATED_FILMS_LOADING, FetchedTopRatedFilmsType } from "../actions/TopRatedFilms/TopRatedFilmsActionTypes"


interface DefaultStateI{
  loading: boolean,
  topRated?: FetchedTopRatedFilmsType
}

const defaultState: DefaultStateI = {
  loading: false
}

const topRatedFilmsReducer = (state: DefaultStateI = defaultState, action: TopRatedFilmsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case TOP_RATED_FILMS_FAIL:
      return {
        loading: false
      }
    case TOP_RATED_FILMS_LOADING:
      return {
        loading: true
      }
    case TOP_RATED_FILMS_SUCCESS:
      return {
        loading: false,
        topRated: action.payload
      }
    default:
      return state
  }
}


export default topRatedFilmsReducer 