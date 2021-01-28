import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CityWeather from '../pages/CityWeather';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/:cityName_weather" exact component={CityWeather} />
  </Switch>
);

export default Routes;
