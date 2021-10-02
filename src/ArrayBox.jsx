import React from "react";
import "./Visualizer.css";

class ArrayBox extends React.Component {
  render() {
    let array = this.props.array;
    return (
      <div className="sorter">
        <div className="array-box">
          {array.map((bar) => (
            <div
              id={array.indexOf(bar)}
              className="bar"
              key={bar.key}
              style={{
                height: (bar.value / 100) * (window.innerHeight * 0.6),
                background: bar.color,
              }}
            >
              <p className="bar-number">{bar.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ArrayBox;
