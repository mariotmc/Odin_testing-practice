function analyzeArray(arr) {
  return {
    average: arr.reduce((accum, curr) => accum + curr) / arr.length,
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
}

export default analyzeArray;
