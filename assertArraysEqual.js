const assertEqualArrays = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  return true;
};

assertEqualArrays([], [1]);
assertEqualArrays([1, 2, 3], [3, 2, 1]);
assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]);
assertEqualArrays(["1", "2", "3"], ["1", "2", 3]);