import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import NextTrip from "./containers/NextTrip";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/nexttrip"} component={NextTrip} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
