//  Types for basic search by film id ================================
export const INDIVIDUAL_FILM_LOADING = "INDIVIDUAL_FILM_LOADING";
export const INDIVIDUAL_FILM_FAIL = "INDIVIDUAL_FILM_FAIL";
export const INDIVIDUAL_FILM_SUCCESS = "INDIVIDUAL_FILM_SUCCESS";

export type IndividualFilmType = {
  genres: [IndividualFilmGenres];
  backdrop_path: string;
  budget: number;
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  production_companies: Array<Company>;
  imdb_id: string;
  runtime: number;
};

export type IndividualFilmGenres = {
  id: number;
  name: string;
};

export type Company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export interface IndividualFilmFail {
  type: typeof INDIVIDUAL_FILM_FAIL;
  errorMsg: "";
}
export interface IndividualFilmLoading {
  type: typeof INDIVIDUAL_FILM_LOADING;
  errorMsg: "";
}
export interface IndividualFilmSuccess {
  type: typeof INDIVIDUAL_FILM_SUCCESS;
  payload: IndividualFilmType;
  filmId: number;
  errorMsg: "";
}

export type IndividualFilmDispatchTypes =
  | IndividualFilmFail
  | IndividualFilmLoading
  | IndividualFilmSuccess;

//  ==========================================================
