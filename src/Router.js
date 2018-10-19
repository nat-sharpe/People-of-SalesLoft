import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PeopleScreen from './Components/PeopleScreen';
import FrequencyScreen from './Components/FrequencyScreen';
import NavBar from './Components/NavBar';

const Router = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PeopleScreen} />
          <Route path="/frequency" component={FrequencyScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
