import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import PeopleScreen from './Components/PeopleScreen';
import FrequencyScreen from './Components/FrequencyScreen';
import DupesScreen from './Components/DupesScreen';
import './index.css';

const Router = () => {
  return (
    <HashRouter>
      <div className="main">
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
