export function bubbleSort(array) {
  let animations = [];
  let fakeArray = array.map((a) => a.value);
  let swapped = true;
  for (let i = 0; i < fakeArray.length; i++) {
    if (!swapped) {
      animations.push({ animationType: "complete", complete: [fakeArray.length - i - 1] });
    } else {
      swapped = false;
      for (let j = 0; j < fakeArray.length - i - 1; j++) {
        animations.push({ animationType: "compare", first: j, second: j + 1 });
        if (fakeArray[j] > fakeArray[j + 1]) {
          swap(fakeArray, j, j + 1);
          animations.push({ animationType: "swap", first: j, second: j + 1 });
          swapped = true;
        }
        animations.push({ animationType: "return", first: j, second: j + 1 });
      }
      animations.push({
        animationType: "complete",
        complete: [fakeArray.length - i - 1],
      });
    }
  }

  return animations;
}

export function insertionSort(array) {
  let animations = [];
  let j;
  let fakeArray = array.map((a) => a.value);
  for (let i = 1; i < fakeArray.length; i++) {
    j = i - 1;
    while (j >= 0) {
      animations.push({ animationType: "compare", first: j, second: j + 1 });
      if (fakeArray[j + 1] >= fakeArray[j]) {
        animations.push({ animationType: "complete", complete: [j, j + 1] });
        break;
      }
      swap(fakeArray, j, j + 1);
      //fakeArray[j+1] = fakeArray[j];
      animations.push({ animationType: "swap", first: j, second: j + 1 });
      animations.push({ animationType: "complete", complete: [j + 1] });
      j--;
      if (j < 0) {
        animations.push({ animationType: "complete", complete: [0] });
      }
    }
  }

  return animations;
}

// export function mergeSortEntry(array) {
//   let animations = [];
//   let fakeArray = array.map((a) => a.value);

//   const mergeSort = (array, start, end) => {
//     const half = array.length / 2;
//     const halfIdx = (end - start) / 2;
//     //base case
//     if (array.length < 2) {
//       return array;
//     }
//     const left = array.splice(0, half);
//     return merge(mergeSort(left), start, halfIdx, mergeSort(array), halfIdx + 1, end);
//   }

//   const merge = (left, lStart, lEnd, right, rStart, rEnd) => {
//     let array = [];
//     let counter = 0;

//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         array.push(left.shift());
//         animations.push({
//           animationType: "swap",
//           first: lStart + lCounter,
//           second: rStart + rCounter,
//         });
//         lCounter++;
//         console.log("left: ", left.length);
//       } else {
//         array.push(right.shift());
//         animations.push({
//           animationType: "swap",
//           first: lStart + lCounter,
//           second: rStart + rCounter,
//         });
//         rCounter++;
//         console.log("right: ", right.length);
//       }
//     }
//     return [...array, ...left, ...right];
//   }

//   mergeSort(fakeArray, 0, fakeArray.length);

//   console.log(animations);
//   return animations;
// }

function swap(array, e1, e2) {
  let temp = array[e1];
  array[e1] = array[e2];
  array[e2] = temp;
}
