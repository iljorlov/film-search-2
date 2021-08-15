import { PopularFilmsDispatchTypes, POPULAR_FILMS_FAIL, POPULAR_FILMS_SUCCESS, POPULAR_FILMS_LOADING, FetchedPopularFilmsType } from "../actions/PopularFilms/PopularFilmsActionTypes"

interface DefaultStateI{
  loading: boolean,
  popular?: FetchedPopularFilmsType
}

const defaultState: DefaultStateI = {
  loading: false
}

const popularFilmsReducer = (state: DefaultStateI = defaultState, action: PopularFilmsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case POPULAR_FILMS_FAIL:
      return {
        loading: false
      }
    case POPULAR_FILMS_LOADING:
      return {
        loading: true
      }
    case POPULAR_FILMS_SUCCESS:
      return {
        loading: false,
        popular: action.payload
      }
    default:
      return state
  }
}


export default popularFilmsReducer 