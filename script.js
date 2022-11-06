function displayNum(num){
  result.value+=num;
}
function clearBox(){
    result.value="";
}
function evaluateExpression(){
 output=eval(result.value);
 result.value=output;
}
function removelast(){
    result.value=result.value.slice(0,-1)
}