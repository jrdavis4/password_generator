// Assignment Code
var generateBtn = document.querySelector("#generate");
// var allowedChars = "0123456789abcdefghijklmnopqrstuvwxyz !\"#$&'()*+,-./:;<=>?@[\\]^_`{|}~";
// allowedChars = allowedChars.split("");

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var special = " !\"#$&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function askPasswordCriteria(password){

  //ASK PASSWORD LENGTH
  while(!(password.pwLength >= 8 && password.pwLength <= 128)){

    password.pwLength = prompt("Enter desired password length (8-128 charactes");

    if (isNaN(password.pwLength)){
      alert("You must enter a number only!");
    } else if (password.pwLength > 128) {
      alert("Password must be no longer than 128 characters");
    } else if (password.pwLength < 8){
      alert("Password must be at least 8 characters long!");
    }
  }

  var isValid = false;
  while (isValid === false){

    //UPPER CASE
    do{
      password.upper = prompt("Do you want to include upper case? [y or n]").toLowerCase();
    }
    while(!(password.upper === "y" || password.upper === "n"));
  

    //LOWER CASE
    do{
      password.lower = prompt("Do you want to include lower case? [y or n]").toLowerCase();
    }
    while(!(password.lower === "y" || password.lower === "n"));


    //NUMBERS
    do{
      password.numbers = prompt("Do you want to include numbers? [y or n]").toLowerCase();
    }
    while(!(password.numbers === "y" || password.numbers === "n"));


    //SPECIAL CHARACTERS
    do{
      password.special = prompt("Do you want to include special characters? [y or n]").toLowerCase();
    }
    while(!(password.special === "y" || password.special === "n"));
    

    //CHECK IF AT LEAST ONE TYPE SELECTED
    if(password.upper === "y" || password.lower === "y" || password.numbers === "y" || password.special === "y"){
      isValid = true;
    } else {
      alert("You must use at least one character type!");
    }
  }

  return password;

}

function generatePassword(){

  var password = {
    pwLength: 0,
    upper: "n",
    lower: "n",
    numbers: "n",
    special: "n",
  }

  password = askPasswordCriteria(password);


  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
