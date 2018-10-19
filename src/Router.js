import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import PeopleScreen from './Components/PeopleScreen';
import FrequencyScreen from './Components/FrequencyScreen';
import DupesScreen from './Components/DupesScreen';

const Router = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PeopleScreen} />
          <Route path="/frequency" component={FrequencyScreen} />
          <Route path="/dupes" component={DupesScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
