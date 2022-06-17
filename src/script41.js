const MAX_NUMBER_ELECTION = 2;
const MIN_NUMBER_ELECTION = 0;

let userElection;
let cpuNumElection;
//definir variable ganadora user
//definir variable ganadora cpu
//definir repetición
let winnerCpu = 0;
let winnerUser = 0;

while (winnerUser < 3 && winnerCpu < 3 || (userElection == cpuNumElection)) {
    do {
        userElection = parseInt(prompt("Elige 0:piedra, 1:papel o 2:tijera"));
    } while (userElection!=0 && userElection!=1 && userElection!=2);

    cpuNumElection = Math.floor((Math.random() * MAX_NUMBER_ELECTION - MIN_NUMBER_ELECTION + 1) + MIN_NUMBER_ELECTION);

    if(userElection == cpuNumElection) console.log("Empate");
    ((userElection == 0 && cpuNumElection == 2)||(userElection == 1 && cpuNumElection == 0)||(userElection == 2 && cpuNumElection == 1))? winnerUser= (winnerUser + 1) : winnerCpu = (winnerCpu + 1);
    console.log (`The User: ${winnerUser} and CPU: ${winnerCpu}`)
}

let winner;
(winnerUser == 3)? winner="User" : winner="CPU"

console.log(`El ganador es ${winner}. La CPU ha obtenido ${winnerCpu} puntos y tu has obtenido ${winnerUser} puntos. Siendo el código 0:piedra, 1:papel o 2:tijera`);