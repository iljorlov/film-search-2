import { TrendingTvDispatchTypes, TRENDING_TV_FAIL, TRENDING_TV_LOADING, TRENDING_TV_SUCCESS, FetchedTrendingTvType } from "../actions/Trending/TrendingActionTypes"


interface DefaultStateI{
  loading: boolean,
  trendingTV?: FetchedTrendingTvType
}

const defaultState: DefaultStateI = {
  loading: false
}

const trendingTVReducer = (state: DefaultStateI = defaultState, action: TrendingTvDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case TRENDING_TV_FAIL:
      return {
        loading: false
      }
    case TRENDING_TV_LOADING:
      return {
        loading: true
      }
    case TRENDING_TV_SUCCESS:
      return {
        loading: false,
        trendingTV: action.payload
      }
    default:
      return state
  }
}


export default trendingTVReducer 