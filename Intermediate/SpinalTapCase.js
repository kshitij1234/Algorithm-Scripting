/*
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var ans=""; 
  var mark=0;
  for(var i=0;i<str.length;i++)
    {
      var ch=str.charAt(i);
      if(ch=='_'||ch==' ')
        {
          mark=1;
          ans+='-';
        }
      else if(mark===0&&(ch.charCodeAt(0)<=90&&ch.charCodeAt(0)>=65))
        {
          ans+='-';
          ans+=ch.toLowerCase();
          
        }
      else{
        ans+=ch.toLowerCase();
        mark=0;
      }
    }
  if(ans.charAt(0)=='-')
    ans=ans.substring(1);
  
  return ans;
}

console.log(spinalCase('all-the-small-things'));

