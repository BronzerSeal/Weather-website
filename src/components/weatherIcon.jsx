import SunnyIcon from "../img/day/Sunny.png";
import DayLightRain from "../img/day/Light rain.png";
import Cloudy from "../img/day/Cloudy.png";
import MoonIcon from "../img/night/Clear.png";
import NightLightRain from "../img/night/Light rain.png";
import NightCloudy from "../img/night/Cloudy.png";

const WeatherIcon = ({ cityWeather, is_day, onClick }) => {
  let icon;
  if (is_day) {
    if (cityWeather === "Sunny") {
      icon = SunnyIcon;
    } else if (cityWeather.includes("rain")) {
      icon = DayLightRain;
    } else {
      icon = Cloudy;
    }
  } else {
    if (cityWeather === "Moonly") {
      icon = MoonIcon;
    } else if (cityWeather.includes("rain")) {
      icon = NightLightRain;
    } else {
      icon = NightCloudy;
    }
  }

  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={icon} style={{ width: "200px", marginBottom: "10px" }} alt="" />
    </div>
  );
};

export default WeatherIcon;
