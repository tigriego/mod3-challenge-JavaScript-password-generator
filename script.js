// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked!")

  //1. Prompt the user for the password critera
  //  a. Password length between 8-128
  function createPasswordOptions() {
    var passwordLength = prompt(
      'How long would you like the length of your password to be? (must be 10-128 characters in length)'
    );
    if (passwordLength < 10 || passwordLength > 128) {
      alert("Please try again, password length must be 10-128 charcters in length");
      return null;
    }

    var containsSpecialCharacters = confirm("Click OK to confirm including special characters in your password.");
  }
  //  b. lowercase, uppercase, numeric, and/or special characters
  //       idea: var name = prompt("Enter your name:");
  alert("How many characters would you like your password to contain?");
  alert("Click OK to confirm numeric characters.");
  alert("Click OK to confirm lowercase characters.");
  alert("Click OK to confirm uppercase characters.");
  // (needs text box to enter a number 8-128)
  //2. Validate the input
  //3. Generate password based on critera


  //4. Display the generated password on page
  return "Generated Password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordOptions = createPasswordOptions();

}

function createPasswordOptions() {
  var passwordLength = prompt(
    'How long would you like the length of your password to be? (must be 10-128 characters in length)'
  );
  if (passwordLength < 10 || passwordLength > 128) {
    alert("Please try again, password length must be 10-128 charcters in length");
    return null;
  }

  var containsSpecialCharacters = confirm("Click OK to confirm including special characters in your password.");
  var contiansNumericCharacters = confirm("Click OK to confirm including numeric characters in your password.");
  var contiansLowercaseCharacters = confirm("Click OK to confirm including lowercase characters in your password.");
  var contiansUppercaseCharacters = confirm("Click OK to confirm including uppercase characters in your password.");

}
