import { combineReducers } from "redux";
import individualPersonReducer from "./IndividualPersonReducer";
import personExternalIdsReducer from "./PersonExternalIdsReducer";
import personImagesReducer from "./PersonImagesReducer";
import personMoviesReducer from "./PersonMoviesReducer";
import personTVsReducer from "./PersonTVsReducer";

const RootPersonReducer = combineReducers({
  personData: individualPersonReducer,
  personImages: personImagesReducer,
  personTVs: personTVsReducer,
  personMovies: personMoviesReducer,
  personExternalIds: personExternalIdsReducer,
});

export default RootPersonReducer;
