// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Button has been clicked!")

//1. Prompt the user for the password critera
//  a. Password length between 8-128
//  b. lowercase, uppercase, numeric, and/or special characters
//2. Validate the input
//3. Generate password based on critera


//4. Display the generated password on page
return "Generated Password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);