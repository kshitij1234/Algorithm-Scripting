/*
	Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

	For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

	The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

	Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/



function mutation(arr) {
  
  var flag=1;
  arr[1]= arr[1].toLowerCase();
  arr[0]= arr[0].toLowerCase();
  
  for(var i=0;i<arr[1].length;i++)
    {
      if(arr[0].indexOf(arr[1].charAt(i))==-1)
      {
        flag=0;
        break;
      }
    }
  
  return flag==1;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
