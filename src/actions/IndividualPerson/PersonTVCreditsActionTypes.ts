import { TvType } from "../Trending/TrendingActionTypes";

export const INDIVIDUAL_PERSON_TV_CREDITS_LOADING =
  "INDIVIDUAL_PERSON_TV_CREDITS_LOADING";
export const INDIVIDUAL_PERSON_TV_CREDITS_FAIL =
  "INDIVIDUAL_PERSON_TV_CREDITS_FAIL";
export const INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS =
  "INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS";

export type IndividualPersonTvCreditsType = {
  id: number;
  cast: [TVPersonCast];
  crew: [TVPersonCrew];
};

export type TVPersonCast = {
  first_air_date: string;
  name: string;
  backdrop_path: string;
  genre_ids: [number];
  original_language: string;
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  origin_country: [string];
  original_name: string;
  popularity: number;
  character: string;
  credit_id: string;
  episode_count: string;
};
export type TVPersonCrew = {
  first_air_date: string;
  name: string;
  backdrop_path: string;
  genre_ids: [number];
  original_language: string;
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  origin_country: [string];
  original_name: string;
  popularity: number;
  credit_id: string;
  episode_count: string;
  department: string;
  job: string;
};

export interface IndividualPersonTvCreditsFail {
  type: typeof INDIVIDUAL_PERSON_TV_CREDITS_FAIL;
  errorMsg: "";
}
export interface IndividualPersonTvCreditsLoading {
  type: typeof INDIVIDUAL_PERSON_TV_CREDITS_LOADING;
  errorMsg: "";
}
export interface IndividualPersonTvCreditsSuccess {
  type: typeof INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS;
  payload: IndividualPersonTvCreditsType;
  personId: number;
  errorMsg: "";
}

export type IndividualPersonTvCreditsDispatchTypes =
  | IndividualPersonTvCreditsFail
  | IndividualPersonTvCreditsLoading
  | IndividualPersonTvCreditsSuccess;
