import { combineReducers } from "redux";
import popularFilmsReducer from "./PopularFilmsReducer";
import topRatedFilmsReducer from "./TopRatedFilmsReduces";
import upcomingFilmsReducer from "./UpcomingFilmsReducer";

const RootReducer = combineReducers({
  popularFilms: popularFilmsReducer,
  topRatedFilms: topRatedFilmsReducer,
  upcomingFilms: upcomingFilmsReducer
})

export default RootReducer