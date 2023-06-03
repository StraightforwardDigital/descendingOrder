function descendingOrder(n){
  //...
  // Convert the integer to a string, split it into an array of digits, and sort them in descending order
  let digits = n.toString().split('').sort((a, b) => b - a);
  
  // Convert the array of digits back to an integer
  let result = parseInt(digits.join(''));
  
  return result;
}