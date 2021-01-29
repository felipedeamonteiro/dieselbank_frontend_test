import styled from 'styled-components';
import SunnyImage from '../../assets/sunny.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const WeatherBackground = styled.div`
  top: 0;
  height: 40%;
  background: url(${SunnyImage}) no-repeat center;
  background-size: 100% 243%;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: #fff;
    text-shadow: 0 5px 3px #888888;
    font-size: 36px;

    & + p {
      font-size: 68px;
    }
  }
`;

export const ForecastData = styled.div`
  margin-top: 65px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 30%;
    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      color: #fff;

      .weather-data-left,
      .weather-data-right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        p {
          margin-left: 15px;
        }
      }
    }
  }
`;
