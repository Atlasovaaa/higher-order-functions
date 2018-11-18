function every = (array, predicate) => {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function some = (array, predicate) => !array.some(element => !predicate(element));

console.log(every([1, 3, 5], element => element <= 5));
console.log(every([2, 4, 16], element => element < 10));
console.log(some([], element => element > 10));
console.log(some([1,2, 9], element => element < 10));
