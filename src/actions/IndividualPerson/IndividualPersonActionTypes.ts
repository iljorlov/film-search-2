export const INDIVIDUAL_PERSON_LOADING = "INDIVIDUAL_PERSON_LOADING";
export const INDIVIDUAL_PERSON_FAIL = "INDIVIDUAL_PERSON_FAIL";
export const INDIVIDUAL_PERSON_SUCCESS = "INDIVIDUAL_PERSON_SUCCESS";

export type IndividualPersonType = {
  adult: boolean;
  also_known_as: [string];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export interface IndividualPersonFail {
  type: typeof INDIVIDUAL_PERSON_FAIL;
  errorMsg: "";
}
export interface IndividualPersonLoading {
  type: typeof INDIVIDUAL_PERSON_LOADING;
  errorMsg: "";
}
export interface IndividualPersonSuccess {
  type: typeof INDIVIDUAL_PERSON_SUCCESS;
  payload: IndividualPersonType;
  personId: number;
  errorMsg: "";
}

export type IndividualPersonDispatchTypes =
  | IndividualPersonFail
  | IndividualPersonLoading
  | IndividualPersonSuccess;
