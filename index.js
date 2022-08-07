function hasTargetSum(array, target) {
  for(let i = 0; i<array.length;i++) {
    const someNumber = target - array[i]
    for(let j = i + 1; j < array.length; j++) {
      console.log(array[j] + 'should equal' + someNumber)
      if(array[j] === someNumber) {
        return true
      }
    }
  }
  return false
}

/* 
  O(n^2)
*/

/* 
  take one item from the pile
    compare it to the other items in the pile
      if they match
        average those numbers
        compare to the target, if they match
          return true
*/

/*
  The function must return true if any pair of numbers in the array adds up
  to the target number. In order to solve this problem I must use
  quadratic time complexity O(n^2), comparing each item in the array to each
  other to find the match, average those items and then comparing it to the target to see
  if the average matches the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
