import { combineReducers } from "redux";
import filmsSearchReducer from "./FilmSearchReducer";

const RootSearchReducer = combineReducers({
  films: filmsSearchReducer,
});

export default RootSearchReducer;
