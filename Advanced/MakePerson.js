/*
    Fill in the object constructor with the following methods below:

        getFirstName()
        getLastName()
        getFullName()
        setFirstName(first)
        setLastName(last)
        setFullName(firstAndLast)

    Run the tests to see the expected output for each method.

    The methods that take an argument must accept only one argument and it has to be a string.

    These methods must be the only available means of interacting with the object.
*/


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  
  var firstname = firstAndLast.split(' ')[0];
  var lastname = firstAndLast.split(' ')[1];
  
  
  
  this.getFullName = function() {
      return firstname+" "+lastname;
    };
  
    this.getFirstName = function(){
      return firstname;
    };
  
    this.getLastName = function(){
      return lastname;
    };
  
    this.setFirstName = function(first){
      firstname=first;
    };
  
    this.setLastName = function(last){
      lastname=last;
    };
  
    this.setFullName = function(firstAndLast){
      firstname = firstAndLast.split(' ')[0];
      lastname = firstAndLast.split(' ')[1];
  
    };
  
    
};

var bob = new Person('Bob Ross');
bob.getFullName();
