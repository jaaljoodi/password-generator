let btnEl = document.getElementById("generate-btn");
let passOne = document.getElementById("show-passOne");
let passTwo = document.getElementById("show-passTwo");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Declare a variable that sets the limits of the password digits
let digitLimits = 15;

// Create a function that when is clicked will generate a random password made up of 15 digits from the array above.
function generatePass() {
  let generatedPassword = "";
  for (i = 0; i < digitLimits; i++) {
    let generateP = Math.floor(Math.random() * characters.length)
    generatedPassword += characters[generateP]
  }
  return generatedPassword
}

// Add an event listener to the button to call the generatePass() function when it is clicked.
btnEl.addEventListener("click", function() {
  // Call the generatePass() function to generate two passwords and display them on the page.
  let passwordOne = generatePass();
  let passwordTwo = generatePass();
  passOne.textContent = passwordOne;
  passTwo.textContent = passwordTwo;
});