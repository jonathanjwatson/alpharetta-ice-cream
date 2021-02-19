import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import SingleBusiness from "./containers/SingleBusiness/SingleBusiness";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/businesses/:id" component={SingleBusiness} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
