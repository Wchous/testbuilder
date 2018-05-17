// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber === null || cardNumber === undefined){
  	return "null";
  }

  var length = cardNumber.length;
  var firstPrefix = cardNumber.substring(0,2);
  var secondPrefix = cardNumber.substring(0,1);
  var thirdPrefix = cardNumber.substring(0,3);
  var fourthPrefix = cardNumber.substring(0,4);
  var fifthPrefix = cardNumber.substring(0,6);


  if ((firstPrefix === "38" || firstPrefix === "39") && length === 14){
  	return "Diner\'s Club";
  }
  if ((firstPrefix === "34" || firstPrefix === "37") && length === 15){
  	return "American Express";
  }
   if ((fourthPrefix === "4903" || fourthPrefix === "4905" || fourthPrefix === "4911" || fourthPrefix === "4936" ||
  	fifthPrefix === "564182" || fifthPrefix === "633110" || fourthPrefix === "6333" || fourthPrefix === "6759") &&
  	(length === 16 || length === 18 || length === 19)) {
  	return "Switch";
  }
  if (secondPrefix === "4" && (length === 13 || length === 16 || length === 19)){
  	return "Visa";
  }
  if ((firstPrefix === "51" || firstPrefix === "52" || firstPrefix === "53" || firstPrefix === "54" || firstPrefix === "55") && length === 16){
  	return "MasterCard";
  }
  if ((fourthPrefix === "6011" || (parseInt(thirdPrefix) >= 644 && parseInt(thirdPrefix) <= 649) ||
   firstPrefix === "65") && (length === 16 || length === 19)) {
  	return "Discover";
  }
  if ((fourthPrefix === "5018" || fourthPrefix === "5020" || fourthPrefix === "5038" || fourthPrefix === "6304") &&
  	(length >= 12 && length <= 19)) {
  	return "Maestro";
  }
  if (((parseInt(fifthPrefix) >= 622126 && parseInt(fifthPrefix) <= 622925) || 
  	(parseInt(thirdPrefix) >= 624 && parseInt(thirdPrefix) <= 626) || 
  	(parseInt(fourthPrefix) >= 6282 && parseInt(fourthPrefix) <= 6288)) && (length >= 16 && length <= 19)) {
  	return "China UnionPay";
  }
  return "no card number found";
};


