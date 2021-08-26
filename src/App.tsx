import GlobalStyles from "./components/GlobalStyles";
import { Header } from "./components/Navigation";
import { Home } from "./pages/Home";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { TopRated } from "./pages/TopRated";
import { Upcoming } from "./pages/Upcoming";
import { TrendingFilms } from "./pages/TrendingFilms";
import { TrendingPeople } from "./pages/TrendingPeople";
import { TrendingTV } from "./pages/TrendingTV";
import { FilmPage } from "./pages/FilmPage";
import { PersonPage } from "./pages/PersonPage";
import { TVPage } from "./pages/TVPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Header url={location.pathname} />
      <Switch>
        <Route path={"/film-search-2/"} exact>
          <Redirect to={"/popular/1"} />
        </Route>
        <Route path={"/film/:filmId"} exact component={FilmPage}></Route>
        <Route path={"/person/:personId"} exact component={PersonPage}></Route>
        <Route
          path={"/film/:filmId/:pageNumber"}
          exact
          component={FilmPage}
        ></Route>
        <Route path={"/tv/:tvId/:pageNumber"} exact component={TVPage}></Route>
        <Route path={"/popular/:pageNumber"} exact component={Home}></Route>
        <Route path={"/top_rated/:pageNumber"} exact component={TopRated} />
        <Route
          path={"/trending_films/:pageNumber"}
          exact
          component={TrendingFilms}
        />
        <Route
          path={"/trending_people/:pageNumber"}
          exact
          component={TrendingPeople}
        />
        <Route
          path={"/trending_tvs/:pageNumber"}
          exact
          component={TrendingTV}
        />
        <Route path={"/upcoming/:pageNumber"} exact component={Upcoming} />
        <Route exact path={"/"}>
          <Redirect to={"/popular/1"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
