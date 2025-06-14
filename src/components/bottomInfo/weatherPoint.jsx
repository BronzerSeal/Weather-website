import SunnyIcon from "../../img/day/Sunny.png";
import LightRain from "../../img/day/Light rain.png";
import Cloudy from "../../img/day/Cloudy.png";
import moment from "moment";
import { useState } from "react";

const WeatherPoint = ({ cityWeather, cityGradus, id, dayOfWeek }) => {
  let icon;
  if (cityWeather === "Sunny") {
    icon = SunnyIcon;
  } else if (cityWeather.includes("rain")) {
    icon = LightRain;
  } else {
    icon = Cloudy;
  }
  return (
    <div key={id} className="weather-point">
      <img style={{ width: "40px", height: "40px" }} src={icon} alt="" />
      <h3 className="weather-point-day">
        {moment().add(dayOfWeek, "days").format("ddd")}
      </h3>
      <h3 className="weather-point-day">{`${cityGradus}°`}</h3>
    </div>
  );
};

export default WeatherPoint;
