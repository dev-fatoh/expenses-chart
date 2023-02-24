import React from "react";
import data from "./data.json";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Logo from "./images/logo.svg";
import "./main.css";

const App = () => {
  return (
    <div className="container">
      <Header logo={Logo} />
      <main>
        <h1 className="spending">Spending - Last 7 days</h1>
        <Chart chart={data} />
        <hr />
      </main>
    </div>
  );
};
export default App;
