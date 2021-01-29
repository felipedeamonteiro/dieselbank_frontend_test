import React from 'react';
import { FiSun } from 'react-icons/fi';

import { Container, WeatherBackground, ForecastData } from './styles';

const CityWeather: React.FC = () => {
  return (
    <Container>
      <WeatherBackground>
        <p>Campinas - SP</p>
        <p>30 C</p>
      </WeatherBackground>
      <ForecastData>
        <ul>
          <li>
            <div className="weather-data-left">
              <FiSun size={16} color="yellow" />
              <p>Seg</p>
            </div>
            <div className="weather-data-right">
              <p>Min 16 C</p>
              <p>Max 18 C</p>
            </div>
          </li>
          <li>
            <div className="weather-data-left">
              <FiSun size={16} color="yellow" />
              <p>Ter</p>
            </div>
            <div className="weather-data-right">
              <p>Min 16 C</p>
              <p>Max 18 C</p>
            </div>
          </li>
          <li>
            <div className="weather-data-left">
              <FiSun size={16} color="yellow" />
              <p>Qua</p>
            </div>
            <div className="weather-data-right">
              <p>Min 16 C</p>
              <p>Max 18 C</p>
            </div>
          </li>
          <li>
            <div className="weather-data-left">
              <FiSun size={16} color="yellow" />
              <p>Qui</p>
            </div>
            <div className="weather-data-right">
              <p>Min 16 C</p>
              <p>Max 18 C</p>
            </div>
          </li>
          <li>
            <div className="weather-data-left">
              <FiSun size={16} color="yellow" />
              <p>Sex</p>
            </div>
            <div className="weather-data-right">
              <p>Min 16 C</p>
              <p>Max 18 C</p>
            </div>
          </li>
        </ul>
      </ForecastData>
    </Container>
  );
};

export default CityWeather;
