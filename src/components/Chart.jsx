import React from "react";

const Chart = ({ chart }) => {
  return (
    <div className="chart-flex">
      {chart.map((item) => (
        <div key={item.day} className="inner-chart">
          <button
            className="mount"
            style={{
              height: `${item.amount * 3}px`,
            }}
          ></button>
          <p className="days">{item.day}</p>
        </div>
      ))}
    </div>
  );
};
export default Chart;
