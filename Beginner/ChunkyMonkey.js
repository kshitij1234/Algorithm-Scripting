/*
	Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var array=[];
  var temp=[];
  for(var i=0;i<arr.length;i++)
    {
      temp=[];
      for(var j=1;j<=size&&i<arr.length;j++)
        {
          temp.push(arr[i]);
          i++;
        }
      array.push(temp);
      i--;
    }
  
  return array;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
