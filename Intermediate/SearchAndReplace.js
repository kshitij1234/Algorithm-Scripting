/*
    Perform a search and replace on the sentence using the arguments provided and return the new sentence.

    First argument is the sentence to perform the search and replace on.

    Second argument is the word that you will be replacing (before).

    Third argument is what you will be replacing the second argument with (after).

    NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
  
    var ar = str.split(' ');
    var caps = false;
  
    for(var i=0;i<ar.length;i++)
      {
        if(ar[i]===before)
          {
            if(ar[i].charCodeAt(0)<=90)
              caps=true;
            var ch = after.charCodeAt(0);
            if(caps)
              {
                
                if(ch>90)
                  after=String.fromCharCode(ch-32)+after.substring(1);
              }
            else
              {
                if(ch<=90)
                  after=String.fromCharCode(ch-32)+after.substring(1);
              }
            ar[i]=after;
          }
        str=ar.join(' ');
      }
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
