import "./dopInfo.css";

const DopInfo = ({ closeOverlay, mainInfo }) => {
  return (
    <div className="main-div" onClick={closeOverlay}>
      <div className="dop-div" onClick={(e) => e.stopPropagation()}>
        <h2>Detailed weather</h2>
        {mainInfo.map((infos, index) => (
          <div key={index}>
            {Object.keys(infos).map((infoKey) => (
              <div
                key={infoKey}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>{infoKey}</p>
                <p>{infos[infoKey]}</p>
              </div>
            ))}
          </div>
        ))}

        <button className="btn" onClick={closeOverlay}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DopInfo;
