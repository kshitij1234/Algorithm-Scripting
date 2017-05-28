/*
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

*/


function sumFibs(num) {
  
  if (num <= 0) 
    return 0;
  
  var a = 1;
  var b = 1;
  var c = 2;
  var sum = 2;
  while(c<=num)
    {
      if(c%2 == 1)
        sum+=c;
      a=b;
      b=c;
      c=a+b;
    }
  
  
  return sum;
}

console.log(sumFibs(4));
