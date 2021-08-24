import { CreditsDispatchTypes, CREDITS_SUCCESS, CREDITS_LOADING, CREDITS_FAIL, CreditsType } from "../actions/IndividualFilm/CreditsActionTypes"

interface DefaultStateI{
  loading: boolean,
  data?: {[id: number]: CreditsType}
}

const defaultState: DefaultStateI = {
  loading: false
}

const creditsReducer = (state: DefaultStateI = defaultState, action: CreditsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case CREDITS_FAIL:
      return {
        ...state,
        loading: false
      }
    case CREDITS_LOADING:
      return {
        ...state,
        loading: true
      }
    case CREDITS_SUCCESS:
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


export default creditsReducer 