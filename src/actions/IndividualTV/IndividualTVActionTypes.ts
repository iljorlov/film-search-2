import { CastType, CrewType } from "../IndividualFilm/CreditsActionTypes";
import { ImageType } from "../IndividualFilm/ImagesActionTypes";
import { TvType } from "../Trending/TrendingActionTypes";

export const INDIVIDUAL_TV_LOADING = "INDIVIDUAL_TV_LOADING";
export const INDIVIDUAL_TV_FAIL = "INDIVIDUAL_TV_FAIL";
export const INDIVIDUAL_TV_SUCCESS = "INDIVIDUAL_TV_SUCCESS";

export type IndividualTVType = {
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: 2;
    profile_path: string;
  };
  episode_run_time: [number];
  first_air_date: string;
  homepage: string;
  genres: [genre];
  id: number;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: episode_to_air;
  name: string;
  next_episode_to_air: episode_to_air;
  networks: [company];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [company];
  seasons: [season];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: [CastType];
    crew: [CrewType];
    id: number;
  };
  images: {
    backdrops: [ImageType];
    logos: [ImageType];
    poster: [ImageType];
  };
  videos: {
    results: [Video];
  };
  recommendations: {
    page: number;
    total_pages: number;
    total_results: number;
    results: [TvType];
  };
};

export type genre = {
  id: number;
  name: string;
};

export type Video = {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

export type company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type episode_to_air = {
  air_date: string;
  episode_number: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: string;
  still_path: string;
  vote_average: number;
  vote_count: number;
};

export interface IndividualTVFail {
  type: typeof INDIVIDUAL_TV_FAIL;
  errorMsg: "";
}
export interface IndividualTVLoading {
  type: typeof INDIVIDUAL_TV_LOADING;
  errorMsg: "";
}
export interface IndividualTVSuccess {
  type: typeof INDIVIDUAL_TV_SUCCESS;
  payload: IndividualTVType;
  tvId: number;
  errorMsg: "";
}

export type IndividualTVDispatchTypes =
  | IndividualTVFail
  | IndividualTVLoading
  | IndividualTVSuccess;
