/*
	Return the length of the longest word in the provided sentence.

	Your response should be a number.
*/




function findLongestWord(str) {
  
  var array=str.split(' ');
  var max=0;
  
  for(var i=0;i<array.length;i++)
    {
      if(array[i].length>max)
        max=array[i].length;
    }
  
  
  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Google do a barrel roll"));
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
