import { IndividualFilmDispatchTypes, INDIVIDUAL_FILM_FAIL, INDIVIDUAL_FILM_LOADING, INDIVIDUAL_FILM_SUCCESS, IndividualFilmType } from "../actions/IndividualFilm/IndividualFilmActionTypes"

interface DefaultStateI{
  loading: boolean,
  data?: {[id: number]: IndividualFilmType}
}

const defaultState: DefaultStateI = {
  loading: false
}

const individualFilmReducer = (state: DefaultStateI = defaultState, action: IndividualFilmDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case INDIVIDUAL_FILM_FAIL:
      return {
        ...state,
        loading: false
      }
    case INDIVIDUAL_FILM_LOADING:
      return {
        ...state,
        loading: true
      }
    case INDIVIDUAL_FILM_SUCCESS:
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


export default individualFilmReducer 