export const POPULAR_FILMS_LOADING = "POPULAR_FILMS_LOADING"
export const POPULAR_FILMS_FAIL = "POPULAR_FILMS_FAIL"
export const POPULAR_FILMS_SUCCESS = "POPULAR_FILMS_SUCCESS"

export interface PopularFilmsLoading {
  type: typeof POPULAR_FILMS_LOADING
}
export interface PopularFilmsFail {
  type: typeof POPULAR_FILMS_FAIL
}
export interface PopularFilmsSuccess {
  type: typeof POPULAR_FILMS_SUCCESS,
  payload: FetchedPopularFilmsType
}

export type PopularFilmsDispatchTypes = PopularFilmsLoading | PopularFilmsFail | PopularFilmsSuccess

export type FilmType = {
  genre_ids: number[]
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  backdrop_path: string
  video: boolean
  vote_average: number
  vote_count: number
  adult: string
  original_language: string
}

export type FetchedPopularFilmsType = {
  page: number
  results: FilmType[]
}