import React from "react";
import "./Visualizer.css";
import { createAnimations, runAnimations, runAnimation } from "./animationFunctions";
import { ARRAY_LENGTH } from "./settings";
import SortingOptions from "./SortingOptions";
import ArrayBox from "./ArrayBox";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      sortingAlgorithm: "bubbleSort",
      running: false,
      array: [],
    };
    this.runAnimations = runAnimations.bind(this);
    this.runAnimation = runAnimation.bind(this);
  }

  // PAGE RELATED =================================================================================
  componentDidMount() {
    this.generateUnsortedArray(ARRAY_LENGTH);
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  // ARRAY RELATED ================================================================================
  generateUnsortedArray = (length) => {
    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray.push({
        key: i,
        value: randomInteger(1, 100),
        color: "blue",
      });
    }
    this.setState({ array: newArray });
  };

  setSortingAlgorithm = (sortingAlgorithm) => {
    this.setState({ sortingAlgorithm: sortingAlgorithm });
  };

  doSortingAlgorithm = () => {
    let animations = createAnimations(this.state.array, this.state.sortingAlgorithm);
    this.runAnimations(animations);
  };

  render() {
    return (
      <div>
        <div id="main_header">
          <h1 id="main_title">Algorithm Visualizer</h1>
          <p id="author">by CraftinPark</p>
        </div>
        <SortingOptions
          algorithmRunning={this.state.running}
          sortingAlgorithm={this.state.sortingAlgorithm}
          startSorting={this.doSortingAlgorithm}
          changeSorting={this.setSortingAlgorithm}
          generateArray={() => this.generateUnsortedArray(ARRAY_LENGTH)}
        />
        <ArrayBox array={this.state.array} />
      </div>
    );
  }
}
export default SortingVisualizer;
