import { ANIMATION_SPEED } from "./settings";
import { bubbleSort, insertionSort, mergeSortEntry } from "./sortingAlgorithms";

export function createAnimations(array, sortingAlgorithm) {
  let animations = [];
  switch (sortingAlgorithm) {
    case "bubbleSort":
      animations = bubbleSort(array);
      break;
    case "insertionSort":
      animations = insertionSort(array);
      break;
    case "mergeSort":
      //animations = mergeSortEntry(array);
      break;
    default:
      throw new Error("unknown sorting algorithm");
  }
  return animations;
}

export function runAnimations(animations) {
  this.setState({ running: true });
  let delaySum = 0;
  for (let idx = 0; idx < animations.length; idx++)
    delaySum += this.runAnimation(animations[idx], delaySum);
  setTimeout(() => {
    this.setState({ running: false });
  }, delaySum * ANIMATION_SPEED);
}

export function runAnimation(animation, delay) {
  switch (animation.animationType) {
    case "compare":
      animateCompare(this, animation, delay, "red");
      return 1;
    case "swap":
      animateSwap(this, animation, delay, "magenta");
      return 2;
    case "return":
      animateReturn(this, animation, delay);
      return 0;
    case "complete":
      animateComplete(this, animation, delay, "green");
      return 1;
    default:
      throw new Error("unknown animation type");
  }
}

const animateCompare = (t, a, delay, color) => {
  setTimeout(() => {
    t.setState((state) => {
      let array = [...state.array];
      array[a.first].color = color;
      array[a.second].color = color;
      return { array: array };
    });
  }, delay * ANIMATION_SPEED);
};

const animateSwap = (t, a, delay, color) => {
  setTimeout(() => {
    t.setState((state) => {
      let array = [...state.array];
      array[a.first].color = color;
      array[a.second].color = color;
      return { array: array };
    });
  }, delay * ANIMATION_SPEED);
  setTimeout(() => {
    t.setState((state) => {
      let array = [...state.array];
      let temp = array[a.first];
      array[a.first] = array[a.second];
      array[a.second] = temp;
      return { array: array };
    });
  }, (delay + 1) * ANIMATION_SPEED);
};

const animateReturn = (t, a, delay) => {
  setTimeout(() => {
    t.setState((state) => {
      let array = [...state.array];
      array[a.first].color = "blue";
      array[a.second].color = "blue";
      return { array: array };
    });
  }, delay * ANIMATION_SPEED);
};

const animateComplete = (t, a, delay, color) => {
  setTimeout(() => {
    t.setState((state) => {
      let array = [...state.array];
      for (let i = 0; i < a.complete.length; i++) {
        array[a.complete[i]].color = color;
      }
      return { array: array };
    });
  }, delay * ANIMATION_SPEED);
};
