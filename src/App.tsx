import GlobalStyles from "./components/GlobalStyles";
import { Header } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path={['/popular', '/']} component={Home} /> 
      </Switch>
    </div>
  );
}

export default App;