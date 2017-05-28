/*
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/


// a>b
function gcd(a,b){
  
  if(b===0)
    return a;
  return gcd(b,a%b);
  
}

// a>b
function lcm(a,b){
  return (a*b)/gcd(a,b);
}


function smallestCommons(arr) {
  
  arr.sort();
  var min = arr[0];
  var max = arr[1];
  
  var ans=min;
  
  for(var i=min;i<=max;i++)
    {
      ans = lcm(ans,i);
    }
  
  
  
  return ans;
}



console.log(smallestCommons([1,5]));
