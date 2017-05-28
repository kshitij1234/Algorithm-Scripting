/*
    Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/
function findElement(arr, func) {
  var num = 0;
  
  var ans = arr.filter(function(x){
    return func(x);
  });
  
  return ans[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));