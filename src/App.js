import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header p1">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          You <span className="strike">can't</span> spear there!
        </h1>
        <p className="mb0">
          Community map of places where spearfishing is not legal{" "}
          <span role="img" aria-label="hands crossed">
            🙅‍♀️
          </span>
        </p>
        <p className="font-small">
          Note*** this map is not complete, and you should always consult the
          local authorities before diving a new area
        </p>
      </header>

      <div className="container center-block mb1">
        <div className="map-wrapper w100 iframe-container center-block">
          <iframe
            title="map"
            src="https://www.google.com.au/maps/d/u/0/embed?mid=10EGm0xnzbRYgQB0IEHA6yhVXy48HPySd"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
