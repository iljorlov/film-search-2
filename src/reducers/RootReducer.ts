import { combineReducers } from "redux";
import creditsReducer from "./CreditsReducer";
import postersReducer from "./ImagesReducer";
import individualFilmReducer from "./IndividualFilmReducer";
import popularFilmsReducer from "./PopularFilmsReducer";
import recommendedFilmsReducer from "./RecommendedFilmsReducer";
import topRatedFilmsReducer from "./TopRatedFilmsReduces";
import trendingFilmsReducer from "./TrendingFilmsReducer";
import trendingPersonReducer from "./TrendingPersonReducer";
import trendingTVReducer from "./TrendingTVReducer";
import upcomingFilmsReducer from "./UpcomingFilmsReducer";

const RootReducer = combineReducers({
  popularFilms: popularFilmsReducer,
  topRatedFilms: topRatedFilmsReducer,
  upcomingFilms: upcomingFilmsReducer,
  trendingFilms: trendingFilmsReducer,
  trendingPeople: trendingPersonReducer,
  trendingTV: trendingTVReducer,
  individualFilms: individualFilmReducer,
  posters: postersReducer,
  credits: creditsReducer,
  recommendedFilms: recommendedFilmsReducer,
})

export default RootReducer