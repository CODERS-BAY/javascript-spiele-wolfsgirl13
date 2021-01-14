
let symbolPC; //gewähltes Symbol PC random
let symbolUser; //gewähltes Symbol User

let winCondition = 3; //Gewinnbedingung
let userCounter = 0; //gewinne User
let pcCounter = 0;


function play(userChoice) { // Parameter den ich über den Funktionsaufruf mitbekommen habe

    //if( counter > 0) {
        //spielen

        let pcChoice = Math.random() * 3 + 1; //0.000000000001 - 0.9999999999
        pcChoice = Math.floor(pcChoice);


      if(userChoice == pcChoice) {
       
      }else if(userChoice == 1 && pcChoice == 2) {
        pcCounter++;
        
      } else if(userChoice == 1 && pcChoice == 3) {
        userCounter++;
        
      } else if(userChoice == 2 && pcChoice == 1) {
        userCounter++;
        
      } else if(userChoice == 2 && pcChoice == 3) {
        pcCounter++;
       
      } else if(userChoice == 3 && pcChoice == 1) {
        pcCounter++;
      } else if(userChoice == 3 && pcChoice == 2) {
        userCounter++;
       
      }
  
        userChoiceImg.setAttribute('src', 'img/schereStein/symbol' + userChoice + '.jpg'); // hund1.jpg
        pcChoiceImg.setAttribute('src', 'img/schereStein/symbol' + pcChoice + '.jpg');

        if(winCondition != 0)
          if(userChoice == pcChoice) output.innerHTML = "Niemand gewinnt diese Runde";
          else if(userChoice == 1 && pcChoice == 2) output.innerHTML = "Stein schlägt Schere, PC gewinnt diese Runde";
          else if(userChoice == 1 && pcChoice == 3) output.innerHTML = "Schere schneidet Papier, Du gewinnst diese Runde";
          else if(userChoice == 2 && pcChoice == 1) output.innerHTML = "Stein schlägt Schere, Du gewinnst diese Runde";
          else if(userChoice == 2 && pcChoice == 3) output.innerHTML = "Stein umwickelt Papier, PC gewinnt diese Runde";
          else if(userChoice == 3 && pcChoice == 1) output.innerHTML = "Schere schneidet Papier, PC gewinnt diese Runde";
          else if(userChoice == 3 && pcChoice == 2) output.innerHTML = "Papier schlägt Stein, User gewinnt diese Runde";
          else winOrLoose.innerHTML = "Gleichstand!";
    


      winCondition--; 
      let showCounter = document.getElementById('winCondition');
      showCounter.innerHTML = 'Du hast noch ' + winCondition + ' Versuche' ;

         
        if(winCondition == 0) {
            if(userCounter > pcCounter) winOrLoose.innerHTML = "Gratuliere, du hast gewonnen! ";
            else if(userCounter < pcCounter) winOrLoose.innerHTML = "Du hast leider verloren! ";
            else winOrLoose.innerHTML = "Gleichstand! ";

            screen1.classList.add('hidden');
            screen2.classList.remove('hidden');
        }

    } 
  