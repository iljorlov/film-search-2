import axios from "axios";
import { Dispatch } from "redux";
import { RECOMMENDED_FILMS_FAIL, RECOMMENDED_FILMS_LOADING, RECOMMENDED_FILMS_SUCCESS, RecommendedFilmsDispatchTypes} from "./RecommendedFilmsActionTypes";

const api_key = '6650890bc34e6b3eeefaf36590d2a82c'


export const GetRecommendedFilms = (filmId: number, page: number) => async (dispatch: Dispatch<RecommendedFilmsDispatchTypes>) => {
  try {
    dispatch({
      type: RECOMMENDED_FILMS_LOADING,
      errorMsg: ''
    })

    let result = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/recommendations?api_key=${api_key}&language=en-US&page=${page}`)
    dispatch({
      type: RECOMMENDED_FILMS_SUCCESS,
      payload: result.data,
      filmId: filmId,
      errorMsg: ''
    })

  } catch(error){
    dispatch({
      type: RECOMMENDED_FILMS_FAIL,
      errorMsg: error
    })
  }
}
