/*
	Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/



function repeatStringNumTimes(str, num) {
  // repeat after me
  var ans="";
  
  for(var i =1;i<=num;i++)
    ans+=str;
  
  return ans;
}

console.log(repeatStringNumTimes("abc", 3));
