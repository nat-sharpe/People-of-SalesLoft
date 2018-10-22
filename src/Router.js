import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import LoadingScreen from './Components/LoadingScreen';
import PeopleScreen from './Components/PeopleScreen';
import FrequencyScreen from './Components/FrequencyScreen';
import DupesScreen from './Components/DupesScreen';
import LandingScreen from './Components/LandingScreen';
import './index.css';

let loaded = false;

const Router = () => {
  return (
    <HashRouter>
      <div className="main">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route path="/people" component={loaded ? PeopleScreen : LoadingScreen} />
          <Route path="/frequency" component={loaded ? FrequencyScreen : LoadingScreen} />
          <Route path="/dupes" component={loaded ? DupesScreen : LoadingScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
