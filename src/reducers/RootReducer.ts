import { combineReducers } from "redux";
import popularFilmsReducer from "./PopularFilmsReducer";

const RootReducer = combineReducers({
  popularFilms: popularFilmsReducer,

})

export default RootReducer