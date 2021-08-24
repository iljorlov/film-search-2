import { FilmType } from "../PopularFilms/PopularFilmsActionTypes";

export const INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING =
  "INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING";
export const INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL =
  "INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL";
export const INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS =
  "INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS";

export type IndividualPersonMovieCreditsType = {
  id: number;
  cast: [FilmType];
  crew: [FilmType];
};

export interface IndividualPersonMovieCreditsFail {
  type: typeof INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL;
  errorMsg: "";
}
export interface IndividualPersonMovieCreditsLoading {
  type: typeof INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING;
  errorMsg: "";
}
export interface IndividualPersonMovieCreditsSuccess {
  type: typeof INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS;
  payload: IndividualPersonMovieCreditsType;
  personId: number;
  errorMsg: "";
}

export type IndividualPersonMovieCreditsDispatchTypes =
  | IndividualPersonMovieCreditsFail
  | IndividualPersonMovieCreditsLoading
  | IndividualPersonMovieCreditsSuccess;
