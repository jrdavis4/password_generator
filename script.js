// Assignment Code
var generateBtn = document.querySelector("#generate");
var allowedChars = "0123456789abcdefghijklmnopqrstuvwxyz !\"#$&'()*+,-./:;<=>?@[\\]^_`{|}~";
allowedChars = allowedChars.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var password = {
    pwLength: 0,
    upper: false,
    lower: false,
    numbers: false,
    special: false,
  }

  password.pwLength = getLength();

  var terminate = false;
  while(terminate === false){
    password.upper = getUpper();
    password.lower = getLower();
    password.numbers = getNumbers();
    password.special = getSpecial();

    if(password.upper || password.lower || password.numbers || password.special){
      terminate = true;
    } else {
      alert("You must use at least one character type! Try again...");
    }
  }

}

function getLength(){
  var length = 0;

  while(!(length >= 8 && length <= 128)){

    length = prompt("Enter desired password length (8-128 charactes");

    if (isNaN(length)){
      alert("You must enter a number only!");
    } else if (length > 128) {
      alert("Password must be no longer than 128 characters");
    } else if (length < 8){
      alert("Password must be at least 8 characters long!");
    }
  }

  return length;
}

function getUpper(){

  var terminate = false;
  while(terminate === false){
    var upper = prompt("Do you want to include upper case? [y or n]");
    terminate = isValid(upper);
  }

  if (upper === "y"){
    return true;
  } else {
    return false;
  }
 
}

function getLower(){

  var terminate = false;
  while(terminate === false){
    var lower = prompt("Do you want to include lower case? [y or n]");
    terminate = isValid(lower);
  }

  if (lower === "y"){
    return true;
  } else {
    return false;
  }
}

function getNumbers(){
  
  var terminate = false;
  while(terminate === false){
    var number = prompt("Do you want to include numbers? [y or n]");
    terminate = isValid(number);
  }

  if (number === "y"){
    return true;
  } else {
    return false;
  }
}

function getSpecial(){
  
  var terminate = false;
  while(terminate === false){
    var special = prompt("Do you want to include special characters? [y or n]");
    terminate = isValid(special);
  }

  if (special === "y"){
    return true;
  } else {
    return false;
  }
}

function isValid(x){
  if (x.toLowerCase() === "y" || x.toLowerCase() === "n"){
    return true;
  } else {
    return false;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
