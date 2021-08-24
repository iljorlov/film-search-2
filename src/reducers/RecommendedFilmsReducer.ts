import { RecommendedFilmsDispatchTypes, RECOMMENDED_FILMS_SUCCESS, RECOMMENDED_FILMS_LOADING, RECOMMENDED_FILMS_FAIL, RecommendedFilmsType } from "../actions/IndividualFilm/RecommendedFilmsActionTypes"

interface DefaultStateI{
  loading: boolean,
  data?: {[id: number]: RecommendedFilmsType}
}

const defaultState: DefaultStateI = {
  loading: false
}

const recommendedFilmsReducer = (state: DefaultStateI = defaultState, action: RecommendedFilmsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case RECOMMENDED_FILMS_FAIL:
      return {
        ...state,
        loading: false
      }
    case RECOMMENDED_FILMS_LOADING:
      return {
        ...state,
        loading: true
      }
    case RECOMMENDED_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.filmId] : action.payload
        }
      }
    default:
      return state
  }
}


export default recommendedFilmsReducer 