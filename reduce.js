let arrays = [[1, 2, 3], [4, 5], [6]];

combination = (arrays) => arrays.reduce(concatination = (a, b) => a.concat(b));

console.log(combination(arrays));
