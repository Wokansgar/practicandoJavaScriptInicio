//saber la fecha de hoy y guardarla
const today = new Date();
//guardar la fecha de Navidad como una fecha
const christmas = new Date ("12/25/2022");
//restamos las fechas y la trasformamos en dias
const daysUntilChristmas = Math.floor/*parte entera*/((((((christmas-today)/1000)/60)/60)/24)+1);
console.log(daysUntilChristmas);
