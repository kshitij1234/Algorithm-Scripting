/*
    Flatten a nested array. You must account for varying levels of nesting.
*/


function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  var ans=[];
  
  var flatten = function(arg){
    
    if(!Array.isArray(arg))
      ans.push(arg);
    else
      for(var a in arg)
        {
          flatten(arg[a]);
        }
    
  };
  
    arr.forEach(flatten);
  
  
  return ans;
}
console.log(steamrollArray([[["a"]], [["b"]]]));

