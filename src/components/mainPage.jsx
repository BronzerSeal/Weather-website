import React, { useEffect, useState } from "react";
import TopInfo from "./topInfo/topInfo";
import "../App.css";
import WeatherIcon from "./weatherIcon";
import Weatherlist from "./bottomInfo/weatherList";
import BottomTopInfo from "./bottomInfo/bottomTopInfo";
import SearchPanel from "./SearchPanel/searchPanel";
import DopInfo from "./dopInfo/dopInfo";

const MainPage = () => {
  const API_key = "f4c15bbd790b4da7add180858250603";
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const changeSearch = (target) => {
    setSearch(target);
  };

  const handleOpenOverlay = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
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
    if (weather) {
      const data = [
        {
          wind: weather.current.wind_kph,
        },
        { humidity: weather.current.humidity },
        { atmPressure: weather.current.pressure_in },
        { feelsLike: weather.current.feelslike_c },
      ];
      return (
        <div className="container">
          <SearchPanel onChange={changeSearch} />
          <hr />
          <TopInfo cityLocation={weather.location.name} />
          <WeatherIcon
            onClick={handleOpenOverlay}
            cityWeather={weather.current.condition.text}
            is_day={weather.current.is_day}
          />
          {showOverlay && (
            <DopInfo closeOverlay={handleCloseOverlay} mainInfo={data} />
          )}
          <BottomTopInfo
            cityWeatherText={weather.current.condition.text}
            cityGradus={`${Math.round(weather.current.dewpoint_c)}°`}
          />
          <Weatherlist days={weather.forecast.forecastday} />
        </div>
      );
    }
  }
};

export default MainPage;
