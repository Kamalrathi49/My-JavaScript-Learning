
var cnfrm = confirm("Are you want to use calculator?");

if(cnfrm == true){
  
  while(cnfrm) {
      var value1 = prompt("enter 1st value or exit");
      if(value1 == "exit"){  break  }

      var symbol = prompt('+,-,/,* or exit')
      if(symbol == "exit"){  break  }

      var value2 = prompt("enter 2st value or exit");
      if(value2 == "exit"){  break  }

      calculator(value1,value2,symbol)
  }
}
else{
  alert("ok")
}





function calculator(value1,value2,symbol){
  value1 =Number(value1)
  value2 =Number(value2)  

  if (symbol == "+"){
    alert(value1 += value2)
  } 
  else if(symbol == "-" ){
    alert(value1 - value2)
  } 
  else if( symbol == "*"){
    alert(value1 * value2)
  } 
  else if( symbol == "/"){
    alert(value1 / value2)
  }

}

 



