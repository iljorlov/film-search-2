import GlobalStyles from "./components/GlobalStyles";
import { Header } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { TopRated } from "./pages/TopRated";
import { Upcoming } from "./pages/Upcoming";
import { Trending } from "./pages/Trending";


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path={['/popular/:pageNumber', '/']} exact component={Home} /> 
        <Route path={'/top-rated/:pageNumber'} exact component={TopRated} />
        <Route path={'/trending/:pageNumber'} exact component={Trending} />
        <Route path={'/upcoming/:pageNumber'} exact component={Upcoming} />
      </Switch>
    </div>
  );
}

export default App;