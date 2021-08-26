export const FILMS_LOADING = "FILMS_LOADING";
export const FILMS_FAIL = "FILMS_FAIL";
export const FILMS_SUCCESS = "FILMS_SUCCESS";

export type FilmSearchResultsType = {
  page: number;
  total_results: number;
  total_pages: number;
  results: [FilmType];
};

export type FilmType = {
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  backdrop_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  original_language: string;
};

export interface FilmsLoading {
  type: typeof FILMS_LOADING;
  errorMsg: "";
}
export interface FilmsFail {
  type: typeof FILMS_FAIL;
  errorMsg: "";
}
export interface FilmsSuccess {
  type: typeof FILMS_SUCCESS;
  payload: FilmSearchResultsType;
  errorMsg: "";
}

export type FilmsDispatchTypes = FilmsFail | FilmsLoading | FilmsSuccess;
