const MAX_NUMBER = 10;
const MIN_NUMBER = 0;
const aleatoryNumber = Math.floor (Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER);

const userNumber = prompt ("Dime un número del 0 al 10:");

(aleatoryNumber == userNumber)? console.log ("Enhorabuena!! Coincides con la máquina") : console.log ("Has perdido!! No has adivinado el número de la CPU")
console.log (`${userNumber} is the User and ${aleatoryNumber} is the CPU`) 