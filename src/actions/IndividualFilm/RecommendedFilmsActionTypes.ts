import { FetchedPopularFilmsType } from "../PopularFilms/PopularFilmsActionTypes";

//  Types for basic search by film id ================================
export const RECOMMENDED_FILMS_LOADING = "RECOMMENDED_FILMS_LOADING";
export const RECOMMENDED_FILMS_FAIL = "RECOMMENDED_FILMS_FAIL";
export const RECOMMENDED_FILMS_SUCCESS = "RECOMMENDED_FILMS_SUCCESS";

export type RecommendedFilmsType = FetchedPopularFilmsType;

export interface RecommendedFilmsFail {
  type: typeof RECOMMENDED_FILMS_FAIL;
  errorMsg: "";
}
export interface RecommendedFilmsLoading {
  type: typeof RECOMMENDED_FILMS_LOADING;
  errorMsg: "";
}
export interface RecommendedFilmsSuccess {
  type: typeof RECOMMENDED_FILMS_SUCCESS;
  payload: RecommendedFilmsType;
  filmId: number;
  errorMsg: "";
}

export type RecommendedFilmsDispatchTypes =
  | RecommendedFilmsFail
  | RecommendedFilmsLoading
  | RecommendedFilmsSuccess;

//  ==========================================================
