import axios from "axios";
import { Dispatch } from "redux";
import { INDIVIDUAL_FILM_LOADING, INDIVIDUAL_FILM_FAIL, INDIVIDUAL_FILM_SUCCESS, IndividualFilmDispatchTypes} from "./IndividualFilmActionTypes";

const api_key = '6650890bc34e6b3eeefaf36590d2a82c'


export const GetIndividualFilm = (filmId: number) => async (dispatch: Dispatch<IndividualFilmDispatchTypes>) => {
  try {
    dispatch({
      type: INDIVIDUAL_FILM_LOADING,
      errorMsg: ''
    })

    let result = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${api_key}&language=en-US`)
    dispatch({
      type: INDIVIDUAL_FILM_SUCCESS,
      payload: result.data,
      filmId: filmId,
      errorMsg: ''
    })

  } catch(error){
    dispatch({
      type: INDIVIDUAL_FILM_FAIL,
      errorMsg: error
    })
  }
}
