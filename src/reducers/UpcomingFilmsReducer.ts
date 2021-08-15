import { UpcomingFilmsDispatchTypes, UPCOMING_FILMS_FAIL, UPCOMING_FILMS_SUCCESS, UPCOMING_FILMS_LOADING, FetchedUpcomingFilmsType } from "../actions/UpcomingFilms/UpcomingFilmsActionTypes"


interface DefaultStateI{
  loading: boolean,
  upcoming?: FetchedUpcomingFilmsType
}

const defaultState: DefaultStateI = {
  loading: false
}

const upcomingFilmsReducer = (state: DefaultStateI = defaultState, action: UpcomingFilmsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case UPCOMING_FILMS_FAIL:
      return {
        loading: false
      }
    case UPCOMING_FILMS_LOADING:
      return {
        loading: true
      }
    case UPCOMING_FILMS_SUCCESS:
      return {
        loading: false,
        upcoming: action.payload
      }
    default:
      return state
  }
}


export default upcomingFilmsReducer 