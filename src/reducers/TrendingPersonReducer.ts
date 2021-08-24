import { TrendingPersonDispatchTypes, TRENDING_PERSON_FAIL, TRENDING_PERSON_LOADING, TRENDING_PERSON_SUCCESS, FetchedTrendingPersonType } from "../actions/Trending/TrendingActionTypes"


interface DefaultStateI{
  loading: boolean,
  trendingPersons?: FetchedTrendingPersonType
}

const defaultState: DefaultStateI = {
  loading: false
}

const trendingPersonReducer = (state: DefaultStateI = defaultState, action: TrendingPersonDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case TRENDING_PERSON_FAIL:
      return {
        loading: false
      }
    case TRENDING_PERSON_LOADING:
      return {
        loading: true
      }
    case TRENDING_PERSON_SUCCESS:
      return {
        loading: false,
        trendingPersons: action.payload
      }
    default:
      return state
  }
}


export default trendingPersonReducer 