const click = document.querySelector("#flipBtn");

let pointValue = 0;
let multiplier = 1;

function clicked() {
    pointValue = pointValue + (1 * multiplier);

    toString(pointValue)

    document.getElementById("returnedResult").innerHTML = pointValue;
}

function clickedMult() {
    if(pointValue >= 50) {
        pointValue = pointValue - 50;

        document.getElementById("returnedResult").innerHTML = pointValue;

        multiplier = multiplier + 1;

        toString(multiplier);

        document.getElementById("upgradeMult").innerHTML = multiplier;
    }
}