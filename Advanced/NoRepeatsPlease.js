/*
    Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

    For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/







function permAlone(str) {
  var permutations=[];
  
    function permuteall(str,pre)
  {
    if(str.length===0)
      {
        permutations.push(pre);
        return;
      }
    for(var i=0;i<str.length;i++)
      {
        var s=str.substring(0,i)+str.substring(i+1);
        permuteall(s,pre+str.charAt(i));
      }
  }
  
  
  permuteall(str,"");
  
  for(var i=0;i<permutations.length;i++)
   {//noprotect
     for(var j=0;j<permutations[i].length-1;j++)
       {
         if(permutations[i][j]==permutations[i][j+1])
           {
             permutations.splice(i,1);
             i--;
             break;
           }
       }
   }
  
  
  return permutations.length;
}

permAlone("zzzzzzzz");
