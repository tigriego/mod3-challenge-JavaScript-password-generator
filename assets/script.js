var generateBtn = document.querySelector("#generate");

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log("Button has been clicked!")
  while (true){
    var passwordLength = prompt (
      'How long would you like the length of your password to be? (must be between 10-128 characters in length)'
    );
    if (passwordLength < 10 || passwordLength > 128) {
      alert("Please try again, password length must be 10-128 characters in length");
      continue;
    }
    break;
  }
  var containsSpecialCharacters = confirm("Click OK to confirm including special characters in your password.");
  var containsNumericCharacters = confirm("Click OK to confirm including numeric characters in your password.");
  var containsLowercaseCharacters = confirm("Click OK to confirm including lowercase characters in your password.");
  var containsUppercaseCharacters = confirm("Click OK to confirm including special characters in your password.");

  var characterSet = "";

  if (containsSpecialCharacters){
    characterSet += "!@#$^&*()";
  }
  if (containsNumericCharacters){
    characterSet += "0123456789";
  }
  if (containsLowercaseCharacters){
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (containsUppercaseCharacters) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var password = "";
  for(var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}













