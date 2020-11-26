var cnfrm = confirm("are you want to use calculator");
if(cnfrm == true){calculator()}

var value1 = prompt("enter 1st value");
var symbol = prompt('+,-,/,*')
var value2 = prompt("enter 2nd value");




function calculator(input){
  
  if (symbol == "+"){
    alert(value1 += value2)
  } else if(symbol == "-" ){
    alert(value1 - value2)
  } else if( symbol == "*"){
    alert(value1 * value2)
  } else if( symbol == "/"){
    alert(value1 / value2)
  }

 
}

calculator()