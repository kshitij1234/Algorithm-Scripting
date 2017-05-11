/*
	Check if a string (first argument, str) ends with the given target string (second argument, target).

	This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
	But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/



function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var size =target.length;
  var sub = str.substring(str.length-size);
  
  return sub===target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("Open sesame", "same"));

