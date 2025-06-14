import React from "react";
import "./topInfo.css";
import moment from "moment";

const TopInfo = ({ cityLocation }) => {
  return (
    <>
      <p className="top-info">{moment().format("dddd, MMM Do")}</p>
      <p className="top-info top-info-last">
        <b>{cityLocation}</b>
      </p>
    </>
  );
};

export default TopInfo;
