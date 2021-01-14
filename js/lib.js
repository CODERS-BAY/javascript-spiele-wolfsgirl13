

function addCounter() {   //wieviele Runden möchtest du spielen ...
    counter = counterInput.value;
    console.log(counter);

    if (counter > 0) {
        let screen1 = document.getElementById('screen1')
        screen1.classList.add('hidden');

        let screen2 = document.getElementById('screen2')
        screen2.classList.remove('hidden'); // screen1.style.display = 'none' -> 2. Seite holen nachdem 1. Seite passt

    } else {
        swal('Wie oft möchtest du spielen? Bitte gib eine Zahl ein');
    }
}


function playAgain() {
    location.reload();
}


function closePopup() {
    popup.classList.add('hidden');
}

