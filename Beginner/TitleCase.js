/*
	Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

	For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/



function titleCase(str) {
  
  var array = str.split(' ');
  for(var i=0;i<array.length;i++)
    {
      array[i]=array[i].charAt(0).toUpperCase()+array[i].substring(1).toLowerCase();
    }
  str=array.join(' ');
  return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));