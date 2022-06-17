/*let jugadorA = ParseInt (prompt ("De 1 a 5, que número vas a sacar?"));
Math.random() //funcion que te devuelve un valor aleatorio entre 0 y 1
Math.floor() //es quedarte con la parte entera del número*/

const MAX_NUMBER_FOR_GAME = 5;
const MIN_NUMBER_FOR_GAME = 0;
const userSelection = prompt ("¿Pares o Nones?");
const userNum = parseInt (prompt ("Elige entre 0 y 5"));
const cpuNum = Math.floor (Math.random() * (MAX_NUMBER_FOR_GAME - MIN_NUMBER_FOR_GAME + 1) + MIN_NUMBER_FOR_GAME);
const resultScoreForGame = userNum + cpuNum;

const isEvenNumber = (resultScoreForGame % 2 == 0);
const isElectionNumber = (userSelection == "Pares");

//operador ternario: "?"
let winner
((isEvenNumber && isElectionNumber ) || (!isEvenNumber && !isElectionNumber ))?winner="User":winner="CPU";

//let winner = "CPU";
/*if ((isEvenNumber && isElectionNumber ) || (!isEvenNumber && !isElectionNumber )) {
    winner = "User";
}*/

console.log (`The winner is ${winner}. User choose ${userNum} and CPU choose ${cpuNum}`);

/*
if ((resultScoreForGame % 2 == 0 && userSelection == 'Pares' ) || (resultScoreForGame % 2 != 0 && userSelection == 'Nones' )) {
    console.log ("Enhorabuena. Has ganado!! " + "Tu elegiste: " + userNum + " y la CPU eligió: " + cpuNum);   
} else {
    console.log ("Te ha ganado la CPU, Sorry!! " + "Tu elegiste: " + userNum + " y la CPU eligió: " + cpuNum);
}
*/