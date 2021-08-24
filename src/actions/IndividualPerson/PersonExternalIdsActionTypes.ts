// EXID - external id
export const INDIVIDUAL_PERSON_EXID_LOADING = "INDIVIDUAL_PERSON_EXID_LOADING";
export const INDIVIDUAL_PERSON_EXID_FAIL = "INDIVIDUAL_PERSON_EXID_FAIL";
export const INDIVIDUAL_PERSON_EXID_SUCCESS = "INDIVIDUAL_PERSON_EXID_SUCCESS";

export type IndividualPersonExIdType = {
  id: number;
  imdb_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
};

export interface IndividualPersonExIdFail {
  type: typeof INDIVIDUAL_PERSON_EXID_FAIL;
  errorMsg: "";
}
export interface IndividualPersonExIdLoading {
  type: typeof INDIVIDUAL_PERSON_EXID_LOADING;
  errorMsg: "";
}
export interface IndividualPersonExIdSuccess {
  type: typeof INDIVIDUAL_PERSON_EXID_SUCCESS;
  payload: IndividualPersonExIdType;
  personId: number;
  errorMsg: "";
}

export type IndividualPersonExIdDispatchTypes =
  | IndividualPersonExIdFail
  | IndividualPersonExIdLoading
  | IndividualPersonExIdSuccess;
