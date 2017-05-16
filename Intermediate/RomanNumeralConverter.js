/*
    Convert the given number into a roman numeral.

    All roman numerals answers should be provided in upper-case.
*/


//Assuming the num is less than 4000
function convertToRoman(num) {
  
  var str="";
  var divider =1000 ;
  var obj = {
    l100:['M','D','C'],
    l10:['C','L','X'],
    l1:['X','V','I']
  };
  var pos=0;
  var i;
  while(num!=0&&divider!=0)
  {
    if(Math.floor(num/divider)>0)
      {
        var a = Math.floor(num/divider);
        if(divider==1000){
          for(i=1;i<=a;i++)
            str+="M";
          num=num%divider;
          divider=Math.floor(divider/10);
          continue;
        }
        if(a==0)
          {
            
          }
        else if(a==9)
          {
            str+=obj[("l"+divider)][2]+obj[("l"+divider)][0];
          }
        else if(a==4)
          {
            str+=obj[("l"+divider)][2]+obj[("l"+divider)][1];
            
          }
        else if(a>=1&&a<=3)
          {
            while(a!=0)
              {
                str+=obj[("l"+divider)][2];
                a--;
              }
            
          }
        else
          {
            str+=obj[("l"+divider)][1];
            a-=5;
            while(a!=0)
              {
                str+=obj[("l"+divider)][2];
                a--;
              }
            
          }
        
        
      }
    num=num%divider;
    divider=Math.floor(divider/10);
    
  }
  
  
  
 return str;
}

var ans = convertToRoman(2);
console.log("Answer :"+ans);