import "./bottomInfo.css";

const BottomTopInfo = ({ cityWeatherText, cityGradus }) => {
  return (
    <>
      <div className="bottom-top-info-weather">{cityWeatherText}</div>
      <h1 className="bottom-top-info-gradus">{cityGradus}</h1>
    </>
  );
};

export default BottomTopInfo;
