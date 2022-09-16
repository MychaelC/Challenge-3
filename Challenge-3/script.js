var generateBtn = document.querySelector("#generate");
let lowerAlph = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
let upperAlph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let specialChar = ['!','@','#','$','%','^','&','*',];
let num = ['0','1','2','3','4','5','6','7','8','9',];
let criteria = [lowerAlph, upperAlph, specialChar, num];


function generatePassword() {
  length = prompt("What should the length of the password be");
  if (length < 8 || length > 128) {
    alert("Please enter a length between 8 and 128 characters.");
    generatePassword();
  } else {
    lowercase = confirm("Should it include lower-case characters?");
    uppercase = confirm("Should it include upper-case characters?");
    numeric = confirm("Should it include numeric values?");
    specialCha = confirm("Should it include special symbols?");
  }
  let criteriaSelect = [lowercase, uppercase, numeric, specialCha];
  let newCriteria = [];

  for (i=0; i < criteria.length; i++){
    if (criteriaSelect[i]){
      newCriteria=newCriteria.concat(criteria[i]);
    }
  }
  console.log(newCriteria);

  passw = ""
  for (i=0; i < length; i++){
    newChar = newCriteria[Math.floor((Math.random())*newCriteria.length)];
    passw = passw.concat(newChar);
  }
  console.log(passw)
  return passw;
}

function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
