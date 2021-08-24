export const UPCOMING_FILMS_LOADING = "UPCOMING_FILMS_LOADING";
export const UPCOMING_FILMS_FAIL = "UPCOMING_FILMS_FAIL";
export const UPCOMING_FILMS_SUCCESS = "UPCOMING_FILMS_SUCCESS";

export interface UpcomingFilmsLoading {
  type: typeof UPCOMING_FILMS_LOADING;
}
export interface UpcomingFilmsFail {
  type: typeof UPCOMING_FILMS_FAIL;
}
export interface UpcomingFilmsSuccess {
  type: typeof UPCOMING_FILMS_SUCCESS;
  payload: FetchedUpcomingFilmsType;
}

export type UpcomingFilmsDispatchTypes =
  | UpcomingFilmsLoading
  | UpcomingFilmsFail
  | UpcomingFilmsSuccess;

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
  adult: string;
  original_language: string;
};

export type FetchedUpcomingFilmsType = {
  page: number;
  results: FilmType[];
  total_pages: number;
};
