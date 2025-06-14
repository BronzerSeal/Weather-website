import React, { useEffect, useState } from "react";
import TopInfo from "./topInfo/topInfo";
import "../App.css";
import WeatherIcon from "./weatherIcon";
import Weatherlist from "./bottomInfo/weatherList";
import BottomTopInfo from "./bottomInfo/bottomTopInfo";
import SearchPanel from "./SearchPanel/searchPanel";

const MainPage = () => {
  const API_key = "Your api key (https://www.weatherapi.com/)";
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState("");

  const changeSearch = (target) => {
    setSearch(target);
  };

  useEffect(() => {
    if (search) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${search}&days=7`
      )
        .then((response) => response.json())
        .then((res) => {
          setWeather(res);
        })
        .catch((error) => {
          console.error("Ошибка при получении данных:", error);
        });
    }
  }, [search]);

  if (!search) {
    return <SearchPanel onChange={changeSearch} />;
  } else {
    return weather ? (
      <div className="container">
        <SearchPanel onChange={changeSearch} />
        <hr />
        <TopInfo cityLocation={weather.location.name} />
        <WeatherIcon
          cityWeather={weather.current.condition.text}
          is_day={weather.current.is_day}
        />
        <BottomTopInfo
          cityWeatherText={weather.current.condition.text}
          cityGradus={`${Math.round(weather.current.dewpoint_c)}°`}
        />
        <Weatherlist days={weather.forecast.forecastday} />
      </div>
    ) : (
      "loading..."
    );
  }
};

export default MainPage;
