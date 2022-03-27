import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import data from "./data/songs.json";

ReactDOM.render(
  <React.StrictMode>
    <App musicList={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
