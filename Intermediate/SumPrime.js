/*
    Sum all the prime numbers up to and including the provided number.

    A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
*/


function sumPrimes(num) {
  
  var n=2;
  var sum=0;
  while(n<=num)
    {
      if(isPrime(n))
        sum+=n;
      n++;
    }
  
  
  return sum;
}

function isPrime(n)
{
  for(var i=2;i<=Math.sqrt(n);i++)
    {
      if(n%i==0)
        return false;
    }
  return true;
}

console.log(sumPrimes(10));
