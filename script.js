// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePasswordm() {
  var lower = "abcdefghiklmnopqurtuvwxyz";
  var upper = lower.toUpperCase;
  var numbers ='0123456789';
  var special ='"#$%&'()*+,-./:;<=>?@[\]^_`{|}~'

  var characters = 12;

  var hasLower =
  var hasUpper =
  vas hasnumber =
  var hasSpecial =

  if (hasLower) {

  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
