const SELECCION_PIEDRA = 0;
const SELECCION_PAPEL = 1;
const SELECCION_TIJERA = 2;
const userSelection = prompt ("¿Piedra, Papel o Tijera?");
let userSelectNumber

if (userSelection == "Piedra") {
    userSelectNumber = SELECCION_PIEDRA
} else if (userSelection == "Papel") {
    userSelectNumber = SELECCION_PAPEL
} else if (userSelection == "Tijera") {
    userSelectNumber = SELECCION_TIJERA
}


const cpuSelectNumber = Math.floor (Math.random() * (SELECCION_TIJERA - SELECCION_PIEDRA + 1) + SELECCION_PIEDRA);

let cpuSelection
if (cpuSelectNumber == 0) {
    cpuSelection = "Piedra"
} else if (cpuSelectNumber == 1) {
    cpuSelection = "Papel"
} else if (cpuSelectNumber == 2) {
    cpuSelection = "Tijera"
}

let winner

(userSelectNumber == cpuSelectNumber)? console.log ("TIE!!!"):[((userSelectNumber == 0 && cpuSelectNumber == 2) || (userSelectNumber == 1 && cpuSelectNumber == 0) || (userSelectNumber == 2 && cpuSelectNumber == 1))? winner="User":winner="CPU", console.log (`The winner is ${winner}. User choose ${userSelection} and CPU choose ${cpuSelection}`)];

/*
if (userSelectNumber == cpuSelectNumber) {
    console.log ("TIE!!!")
} else {
((userSelectNumber == 0 && cpuSelectNumber == 2) || (userSelectNumber == 1 && cpuSelectNumber == 0) || (userSelectNumber == 2 && cpuSelectNumber == 1))? winner="User":winner="CPU";


console.log (`The winner is ${winner}. User choose ${userSelection} and CPU choose ${cpuSelection}`);
}*/