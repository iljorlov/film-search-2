export const TOP_RATED_FILMS_LOADING = "TOP_RATED_FILMS_LOADING";
export const TOP_RATED_FILMS_FAIL = "TOP_RATED_FILMS_FAIL";
export const TOP_RATED_FILMS_SUCCESS = "TOP_RATED_FILMS_SUCCESS";

export interface TopRatedFilmsLoading {
  type: typeof TOP_RATED_FILMS_LOADING;
}
export interface TopRatedFilmsFail {
  type: typeof TOP_RATED_FILMS_FAIL;
}
export interface TopRatedFilmsSuccess {
  type: typeof TOP_RATED_FILMS_SUCCESS;
  payload: FetchedTopRatedFilmsType;
}

export type TopRatedFilmsDispatchTypes =
  | TopRatedFilmsLoading
  | TopRatedFilmsFail
  | TopRatedFilmsSuccess;

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

export type FetchedTopRatedFilmsType = {
  page: number;
  results: FilmType[];
  total_pages: number;
};
