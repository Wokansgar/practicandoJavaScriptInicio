const nowDate = new Date();
/*console.log (`${nowDate}`);*/

const dayText = nowDate.getDay();//se ctendrá que traducir a dia en texto
let day = nowDate.getDate();
if (day<10) day = `0${day}`;
let month = nowDate.getMonth() + 1;
if (month<10) month = `0${month}`;
let year = nowDate.getFullYear();

const dateParsed = `${day}/${month}/${year}`
console.log(dateParsed);

//console.log (Date.now());