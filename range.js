//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.

function range(start, end, step) {
  let rangeArray = [];
  if (start === undefined || end === undefined || step === undefined || start >= end || step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
    return rangeArray;
  }
}
console.log(range(0, 10, 2));