import { TvType } from "../Trending/TrendingActionTypes";

export const INDIVIDUAL_PERSON_TV_CREDITS_LOADING =
  "INDIVIDUAL_PERSON_TV_CREDITS_LOADING";
export const INDIVIDUAL_PERSON_TV_CREDITS_FAIL =
  "INDIVIDUAL_PERSON_TV_CREDITS_FAIL";
export const INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS =
  "INDIVIDUAL_PERSON_TV_CREDITS_SUCCESS";

export type IndividualPersonTvCreditsType = {
  id: number;
  cast: [TvType];
  crew: [TvType];
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
