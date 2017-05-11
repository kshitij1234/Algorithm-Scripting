/*
	Reverse the provided string.

	You may need to turn the string into an array before you can reverse it.

	Your result must be a string.
*/


function reverseString(str) {
  
  var array = str.split('');
  array.reverse();
  str=array.join('');
  
  return str;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
