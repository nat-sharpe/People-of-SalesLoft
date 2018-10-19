import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PeopleScreen from './PeopleScreen';
import FrequencyScreen from './FrequencyScreen';
import NavBar from './NavBar';

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
