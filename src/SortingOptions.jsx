import React from "react";
import "./Visualizer.css";
import { SORTING_ALGORITHMS } from "./settings";

class SortingOptions extends React.Component {
  render() {
    let algorithmRunning = this.props.algorithmRunning;
    let sortingAlgorithm = this.props.sortingAlgorithm;
    let startSorting = this.props.startSorting;
    let changeSorting = this.props.changeSorting;
    let generateArray = this.props.generateArray;

    return (
      <div id="settings_header">
        {/* GENERAL SORTING OPTIONS ===============================================================*/}
        <div id="sorting_settings">
          <button className="btn btn-light" onClick={generateArray} disabled={algorithmRunning}>
            Generate New Array
          </button>
          <button className="btn btn-light" onClick={startSorting} disabled={algorithmRunning}>
            Sort
          </button>
        </div>
        {/* SORTING ALGORITHM SELECTOR ============================================================*/}
        <div id="sorting_selector">
          {SORTING_ALGORITHMS.map((algorithm) => (
            <button
              key={algorithm + "button"}
              className={
                sortingAlgorithm === algorithm ? "btn btn-primary active" : "btn btn-primary"
              }
              onClick={() => changeSorting(algorithm)}
              aria-pressed="true"
              disabled={algorithmRunning}
            >
              {algorithm}
            </button>
          ))}
        </div>
        {/* DISPLAY SELECTED ALGORITHM ============================================================*/}
        <div id="selected_algorithm">
          <label>Selected Algorithm: </label>
          <input dir="rtl" value={sortingAlgorithm} readOnly />
        </div>
      </div>
    );
  }
}
export default SortingOptions;
