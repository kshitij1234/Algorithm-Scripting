/*
    Translate the provided string to pig latin.

    Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

    If a word begins with a vowel you just add "way" to the end.

    Input strings are guaranteed to be English words in all lowercase.
*/



function translatePigLatin(str) {
  
  var vowels="aeiouAEIOU";
  var part=str.length-1;
  for(var i=0;i<str.length;i++)
  {
    if(vowels.indexOf(str.charAt(i))!=-1)
      {
        part=i;
        break;
      }
  }
  if(part===0)
    {
      str+="way";
    }
  else
    {
      str=str.substring(i)+str.substring(0,i).toLowerCase()+"ay";
    }
  
  
  return str;
}

console.log(translatePigLatin("consonant"));
