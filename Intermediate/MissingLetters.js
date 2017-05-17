/*
    Find the missing letter in the passed letter range and return it.

    If all letters are present in the range, return undefined.
*/



function fearNotLetter(str) {
 
  var letter = undefined;
  
  for(var i = 0;i<str.length-1;i++)
    {
      if((str.charCodeAt(i)+1)!=str.charCodeAt(i+1))
        {
          letter = String.fromCharCode(str.charCodeAt(i)+1);
          break;
        }
    }
  
  return letter;
}

console.log(fearNotLetter("abce"));
