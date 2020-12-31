let counter = 0;
let min = 1;
let max = 100;




let pcChoice = Math.floor((Math.random() * 100) + 1);


function play() {

    if (counter > 0) {

        let guessNumber = document.getElementById("guessNumber").value;
        if (guessNumber <= 0) {
            swal('Bitte gib eine Zahl ein');
        }
        console.log(pcChoice);

        if (guessNumber > 100) {
            swal("Bitte gib eine Zahl von 1 bis 100 ein!")
        }

        if (guessNumber > pcChoice) output.innerHTML = "Deine Zahl ist zu hoch!";
        else if (guessNumber < pcChoice) output.innerHTML = "Deine Zahl ist zu niedrig!";

        

    counter--; 
    let showCounter = document.getElementById('counter');
    showCounter.innerHTML = 'Du hast noch ' + counter + ' Versuche';

         
        if(counter == 0 || guessNumber == pcChoice) {
            if (guessNumber == pcChoice) winOrLoose.innerHTML = "Gratuliere, du hast die Zahl erraten!";
            else if (guessNumber != pcChoice) winOrLoose.innerHTML = "Schade, du hast die Zahl leider nicht erraten!";

            screen2.classList.add('hidden');
            screen3.classList.remove('hidden');
        }
    
}

/* counter--;
        let showCounter = document.getElementById('counter');
        showCounter.innerHTML = 'Du hast noch ' + counter + ' Versuche';

        if (guessNumber == pcChoice) winOrLoose.innerHTML = "Gratuliere, du hast die Zahl erraten!";
        else if (guessNumber != pcChoice) winOrLoose.innerHTML = "Schade, du hast die Zahl leider nicht erraten!";
        

        if (counter == 0 || guessNumber == pcChoice) {

            let screen2 = document.getElementById("screen2");
            screen2.classList.add("hidden");

            let screen3 = document.getElementById("screen3");
            screen3.classList.remove("hidden"); */
        }