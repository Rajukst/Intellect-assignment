import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MainHome from "./Components/Home/MainHome/MainHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
