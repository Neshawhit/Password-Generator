// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // create strings for each set of characters DONE
  //prompt user 'how many characters?' DONE
  //validate the user input
  // prompt the user for what set of characters they want
  //validate the user selected at least one set of charactersgit 
  //randomly generate password and then retrun generated password
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\\';
  var possible = '"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\\ 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var password = '';
  var wantsUpper = null
  var wantsLower = null
  var wantsNumbers = null
  var wantsSymbols = null
  var passwordLength = null; // need to get from prompt
  var userInput = window.prompt('how many characters long (from 8-128) would you like your password to be?');
 console.log (userInput)
  if (!(userInput >= 8 && userInput <= 128)) {
    userInput = window.prompt('Please choose between 8-128.');
  } else { 
   wantsUpper = window.confirm ("Would you like uppercase letters in your password?");
   wantsLower = window.confirm ("Would you like lowercase letter in your password?");
   wantsNumbers = window.confirm ("Would you like numbers in your password?");
   wantsSymbols = window.confirm ("Would you like symbols in your password?");
  }

  // At this moment, you now know what sets of characters the user wants in their password
  // So, create a master set of characters from the desired sets
  // Then, convert your string of master characters to an array
  // THen use a for loop which will loop as many times are the length of the password
  // In each iteration, randomly select a letter from the array of characters
  // // Add that character to your password string
  // var hasLower = confirm("has lowercase letter?");
  // var hasUpper = confirm("has uppercase letters");
  // var hasNumbers = confirm  ("has numbers?");
  // var hasSymbols = confirm ("has symbols?");


//   if ((wantsLower === true))
//   {
    
//   }

//   if(!(wantsUpper === true)
//   possible - upper);

//   if (!(wantsNumber === true)
//   possible -Number);

// if (!(wantSymbols === True);
//   possible - symbols);



  for (var i = 0; i < passwordLength; i++) {
    var userInput = math.floor(math.random()* passwordLength);
    password += possible.random( userInput, userInput + 1);
    
    
  
    // find random letter from possible
    // append to the password string
    
  }
  
  debugger;
  //randomly generated password will return below
  return '';
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















