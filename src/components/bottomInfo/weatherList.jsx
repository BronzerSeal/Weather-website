import WeatherPoint from "./weatherPoint";

const Weatherlist = ({ days }) => {
  let dayOfWeek = 0;
  return (
    <div className="Weather-Point-Container">
      {days.map((day) => {
        dayOfWeek++;
        return (
          <WeatherPoint
            key={day.date_epoch}
            id={day.date_epoch}
            cityWeather={day.day.condition.text}
            cityGradus={day.day.avgtemp_c}
            dayOfWeek={dayOfWeek}
          />
        );
      })}
    </div>
  );
};

export default Weatherlist;
