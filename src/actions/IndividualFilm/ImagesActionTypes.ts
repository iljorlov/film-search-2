export const IMAGES_LOADING = "IMAGES_LOADING";
export const IMAGES_FAIL = "IMAGES_FAIL";
export const IMAGES_SUCCESS = "IMAGES_SUCCESS";

export type ImageType = {
  aspect_ratio: number;
  heigth: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type ImagesType = {
  backdrops: [ImageType];
  id: number;
  logos: [ImageType];
  posters: [ImageType];
};

export interface imagesFail {
  type: typeof IMAGES_FAIL;
  errorMsg: "";
}
export interface imagesLoading {
  type: typeof IMAGES_LOADING;
  errorMsg: "";
}
export interface imagesSuccess {
  type: typeof IMAGES_SUCCESS;
  payload: ImagesType;
  filmId: number;
  errorMsg: "";
}

export type ImagesDispatchTypes = imagesFail | imagesLoading | imagesSuccess;
