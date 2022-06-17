const MAX_NUMBER_FOR_GAME = 5;
const MIN_NUMBER_FOR_GAME = 0;
let userElection;

/*while (userElection!="Pares" && userElection!="Nones") {
    userElection = prompt ("¿Pares o Nones?");
}*/
//WHILE = mientras
//DO...WHILE = hacer esto....mientras

do {
    userElection = prompt ("¿Pares o Nones?");
} while (userElection!="Pares" && userElection!="Nones")

let userNum;
do {
    userNum= parseInt (prompt ("Elige entre 0 y 5"));
} while (userNum<0 || userNum>5 || isNaN (userNum));


const cpuNum = Math.floor (Math.random() * (MAX_NUMBER_FOR_GAME - MIN_NUMBER_FOR_GAME + 1) + MIN_NUMBER_FOR_GAME);
const resultScoreForGame = userNum + cpuNum;

const isEvenNumber = (resultScoreForGame % 2 == 0);
const isElectionNumber = (userSelection == "Pares");

let winner
((isEvenNumber && isElectionNumber ) || (!isEvenNumber && !isElectionNumber ))?winner="User":winner="CPU";

console.log (`The winner is ${winner}. User choose ${userNum} and CPU choose ${cpuNum}`);
