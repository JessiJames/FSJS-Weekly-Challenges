//create function

function greet(input) {
    
//control and return statements
    //Alert user results
  if(input.toLowerCase() === 'Hello'.toLocaleLowerCase()) {
      window.alert("Hello World!");
  }  else {
      window.alert("Have a Good Day!");
  }
}

  

//Prompt user for input and store variable
var answer = window.prompt("Hello there!");
//Call function 
greet(answer);




