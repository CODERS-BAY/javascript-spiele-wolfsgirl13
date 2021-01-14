let counter = 0;
var erde = 9.81;
var mond = 1.62;
var mars = 3.96;
var jupiter = 24.79;
var fallingSpeed = 9.81;


let distanceToMonster = Math.random() * 90 + 10; //Distanz zum Monster
distanceToMonster = Math.round(distanceToMonster);
document.getElementById("distanceToMonster").innerHTML = distanceToMonster;


document.getElementById('planets').onchange = function () {

}

function play() {

    if (counter > 0) {

        let speed = document.getElementById("speed").value; //Wurfstärke
        if (speed <= 0) {
            swal('Bitte gib eine Zahl ein');
        }

        let angle = document.getElementById("angle").value; //Wurfwinkel
        angle = angle * (Math.PI / 180);
        if (angle <= 0) {
            swal('Bitte gib eine Zahl ein');
        }
        let throwingDistance = ((speed * speed) * Math.sin(2 * angle)) / fallingSpeed;
        throwingDistance = Math.round(throwingDistance);

        document.getElementById('throwingDistance').innerHTML = "Du hast " + throwingDistance + " m geworfen";

        counter--;

        let showCounter = document.getElementById('counter');
        showCounter.innerHTML = 'Du hast noch ' + counter + ' Versuche';

        if (throwingDistance == distanceToMonster) {
            swal("Du hast gewonnen!")

        } else if (throwingDistance < distanceToMonster) {
            winOrLoose.innerHTML = "Du hast zu kurz geschossen!";
        } else if (throwingDistance > distanceToMonster) {
            winOrLoose.innerHTML = "Du hast zu weit geschossen!";
        }

        if (counter == 0) {
            swal("Du hast alle deine Versuche verbraucht!")
        }
    }
}