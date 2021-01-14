let counter = 12;
let richtigeStelle = 0;
let richtigeZahl = 0;
let result;

let numberPC1 = Math.round(Math.random() * 9 + 0.5);
let numberPC2 = Math.round(Math.random() * 9 + 0.5);
let numberPC3 = Math.round(Math.random() * 9 + 0.5);


let numberUser1 = document.getElementById('numberUser1');
let numberUser2 = document.getElementById('numberUser2');
let numberUser3 = document.getElementById('numberUser3');

console.log(numberPC1);
console.log(numberPC2);
console.log(numberPC3);

function play() {

  if (numberUser1.value <= 0) {
    swal('Bitte gib eine Zahl ein');
  }
  if (numberUser2.value <= 0) {
    swal('Bitte gib eine Zahl ein');
  }
  if (numberUser3.value <= 0) {
    swal('Bitte gib eine Zahl ein');
  }
  if (numberUser1.value == numberPC1) output1.innerHTML = "erste Zahl stimmt!";
  else if (numberUser1.value > numberPC1) output1.innerHTML = "erste Zahl ist zu groß";
  else if (numberUser1.value < numberPC1) output1.innerHTML = "erste Zahl ist zu klein";
  if (numberUser2.value == numberPC2) output2.innerHTML = "zweite Zahl stimmt!";
  else if (numberUser2.value > numberPC2) output2.innerHTML = "zweite Zahl ist zu groß";
  else if (numberUser2.value < numberPC2) output2.innerHTML = "zweite Zahl ist zu klein";
  if (numberUser3.value == numberPC3) output3.innerHTML = "dritte Zahl stimmt!";
  else if (numberUser3.value > numberPC3) output3.innerHTML = "dritte Zahl ist zu groß";
  else if (numberUser3.value < numberPC3) output3.innerHTML = "dritte Zahl ist zu klein";

  if ((numberUser1.value == numberPC1) && (numberUser2.value == numberPC2) && (numberUser3.value == numberPC3)) {
    swal("Gewonnen! Du hast den Code geknackt!")
  }
  
  counter--;
  let showCounter = document.getElementById('showCounter');
  showCounter.innerHTML = 'Du hast noch ' + counter + ' Versuche';

  if (counter == 0) {
    swal("Du hast alle deine Versuche verbraucht! Probier es nochmal!")
  }
}