import { FilmType } from "../PopularFilms/PopularFilmsActionTypes";

export const INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING =
  "INDIVIDUAL_PERSON_MOVIE_CREDITS_LOADING";
export const INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL =
  "INDIVIDUAL_PERSON_MOVIE_CREDITS_FAIL";
export const INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS =
  "INDIVIDUAL_PERSON_MOVIE_CREDITS_SUCCESS";

export type IndividualPersonMovieCreditsType = {
  id: number;
  cast: [FilmPersonCast];
  crew: [FilmPersonCrew];
};

export type FilmPersonCast = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean; // !!!
  vote_average: number;
  vote_count: number;
  popularity: number;
  character: string;
  credit_id: string;
  order: number;
};
export type FilmPersonCrew = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean; // !!!
  vote_average: number;
  vote_count: number;
  popularity: number;
  credit_id: string;
  department: string;
  job: string;
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
