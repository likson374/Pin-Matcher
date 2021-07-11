const buttons = document.querySelectorAll(".button");
const generatePin = document.querySelector(".generate-pin");
let matchPin = document.querySelector(".match-pin");
const generateBtn = document.querySelector(".generate-btn");
const submitBtn = document.querySelector(".submit-btn");
const matched = document.querySelector(".matched");
const unmatched = document.querySelector(".unmatched");
const clickNumber = document.querySelector(".clicked");




function generateRandomNumber() {
  let value = Math.floor(1000 + Math.random() * 9000);
  generatePin.value = value;
  matched.style.display = "none";
  unmatched.style.display = "none";
  matchPin.value = "";
  submitBtn.classList.remove("disabled");

}
generateBtn.addEventListener("click", generateRandomNumber);



let matchPinValue;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.innerText == "C") {
      matchPin.value = "";
    } else if (button.innerText == "<") {
      let matchPinValue = matchPin.value;
      matchPinValue = matchPinValue.substr(0, matchPinValue.length - 1);
      matchPin.value = matchPinValue;
    } else {
      let value = button.innerText;
      matchPin.value = matchPin.value + value;
    }
  });
});

function pinMatcher() {
  if (generatePin.value == matchPin.value) {
    matched.style.display = "block";
    clickNumber.parentElement.style.display = 'none';
    submitBtn.classList.add('disabled')
  } else {
    unmatched.style.display = "block";
    clickNumber.parentElement.style.display = 'block';
  }
  if (generatePin.value == "" && matchPin.value == "") {
    alert("please enter valid number");
  }
  //submitBtn.classList.add('disabled')
  clickController()
}

function clickController(){
  let number = +clickNumber.innerText;
  number = number - 1;
  clickNumber.innerText = number;
  
 if(number == 0){
    console.log(clickNumber.parentElement);
    clickNumber.parentElement.innerText = `you have no try left`;
    submitBtn.classList.add('disabled')
   } 
}
submitBtn.addEventListener("click", pinMatcher);



