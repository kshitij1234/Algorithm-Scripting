/*
	Return the factorial of the provided integer.

	If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

	Factorials are often represented with the shorthand notation n!

	For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/


function factorialize(num) {
  
  var ans=1;
  
  while(num>1)
    {
      ans*=num;
      num--;
    }
  
  return ans;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
