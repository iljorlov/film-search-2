export const INDIVIDUAL_PERSON_IMAGES_LOADING =
  "INDIVIDUAL_PERSON_IMAGES_LOADING";
export const INDIVIDUAL_PERSON_IMAGES_FAIL = "INDIVIDUAL_PERSON_IMAGES_FAIL";
export const INDIVIDUAL_PERSON_IMAGES_SUCCESS =
  "INDIVIDUAL_PERSON_IMAGES_SUCCESS";

export type IndividualPersonImagesType = {
  id: number;
  profiles: [PersonProfileType];
};

export type PersonProfileType = {
  aspect_ratio: number;
  height: number;
  file_path: string;
  vote_average: number;
  width: number;
};

export interface IndividualPersonImagesFail {
  type: typeof INDIVIDUAL_PERSON_IMAGES_FAIL;
  errorMsg: "";
}
export interface IndividualPersonImagesLoading {
  type: typeof INDIVIDUAL_PERSON_IMAGES_LOADING;
  errorMsg: "";
}
export interface IndividualPersonImagesSuccess {
  type: typeof INDIVIDUAL_PERSON_IMAGES_SUCCESS;
  payload: IndividualPersonImagesType;
  personId: number;
  errorMsg: "";
}

export type IndividualPersonImagesDispatchTypes =
  | IndividualPersonImagesFail
  | IndividualPersonImagesLoading
  | IndividualPersonImagesSuccess;
