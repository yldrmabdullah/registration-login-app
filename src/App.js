import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MainPage from "./pages/MainPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
