// ========== TRENDING FILMS TYPES ============
export const TRENDING_FILMS_LOADING = "TRENDING_FILMS_LOADING"
export const TRENDING_FILMS_FAIL = "TRENDING_FILMS_FAIL"
export const TRENDING_FILMS_SUCCESS = "TRENDING_FILMS_SUCCESS"

export interface TrendingFilmsLoading {
  type: typeof TRENDING_FILMS_LOADING
}
export interface TrendingFilmsFail {
  type: typeof TRENDING_FILMS_FAIL
}
export interface TrendingFilmsSuccess {
  type: typeof TRENDING_FILMS_SUCCESS,
  payload: FetchedTrendingFilmsType
}
export type TrendingFilmsDispatchTypes = TrendingFilmsLoading | TrendingFilmsFail | TrendingFilmsSuccess

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
export type FetchedTrendingFilmsType = {
  page: number
  results: FilmType[]
  total_pages: number
}

// ========== TRENDING TV TYPES ============
export const TRENDING_TV_LOADING = "TRENDING_TV_LOADING"
export const TRENDING_TV_FAIL = "TRENDING_TV_FAIL"
export const TRENDING_TV_SUCCESS = "TRENDING_TV_SUCCESS"

export interface TrendingTvLoading {
  type: typeof TRENDING_TV_LOADING
}
export interface TrendingTvFail {
  type: typeof TRENDING_TV_FAIL
}
export interface TrendingTvSuccess {
  type: typeof TRENDING_TV_SUCCESS,
  payload: FetchedTrendinTvType
}
export type TrendingTvDispatchTypes = TrendingTvLoading | TrendingTvFail | TrendingTvSuccess

export type TvType = {
  first_air_date: string
  name: string
  backdrop_path: string
  genre_ids: number[]
  vote_count: number
  original_language: string
  vote_average: number
  poster_path: string
  original_name: string
  origin_country: string[]
  id: number
  overview: string
  popularity: number
  media_type: string
}
export type FetchedTrendinTvType = {
  page: number
  results: PersonType[]
  total_pages: number
}

// ========== TRENDING PERSON TYPES ============
export const TRENDING_PERSON_LOADING = "TRENDING_PERSON_LOADING"
export const TRENDING_PERSON_FAIL = "TRENDING_PERSON_FAIL"
export const TRENDING_PERSON_SUCCESS = "TRENDING_PERSON_SUCCESS"

export interface TrendingPersonLoading {
  type: typeof TRENDING_PERSON_LOADING
}
export interface TrendingPersonFail {
  type: typeof TRENDING_PERSON_FAIL
}
export interface TrendingPersonSuccess {
  type: typeof TRENDING_PERSON_SUCCESS,
  payload: FetchedTrendingPersonType
}
export type TrendingPersonDispatchTypes = TrendingPersonLoading | TrendingPersonFail | TrendingPersonSuccess

export type PersonType = {
  known_for_department: string
  profile_path: string
  name: string
  adult: string
  known_for: FilmType[]
  id: number
  gender: number
  popularity: number
  media_type: string
}
export type FetchedTrendingPersonType = {
  page: number
  results: PersonType[]
  total_pages: number
}