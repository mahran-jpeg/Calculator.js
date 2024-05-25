let input = document.getElementById("input")
let inputResults=document.getElementById("inputResult")

function clearResults(){
  input.value= ' '
  inputResults.value= ''
}

function giveValue(value){
input.value+=value;
}

function calculateResult() {
  let result = eval (input.value); 
  Math.floor(result)
  
  inputResults.value=result;
  //eval is a function that takes in the string and evaluates it as javascript code, then returns
}