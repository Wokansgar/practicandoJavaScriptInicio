//console.log ( "Hola Mundo!");
//window.alert ("Hola Mundo!");
//document.write ("Hola Mundo!");
//let ....para una variable no constante
//const ....para una variable que no va a variar, constante
//var ....es antiguo y no se usa


/*mensaje = "Hola Mundo!";
console.log ( "Hola Mundo!");*/

//let numero1 = 3;
//console.log ("numero1: ", numero1)
//const numero2 =0;
//console.log ("numero2: ", numero2)

//para cambiar el valor de let, picamos:
//numero1 = 5;
//console.log ("numero1: ", numero1)
//numero2 = 4;
//console.log ("numero2: ", numero2) //no funcionará pq una constante no se puede variar

/*let numero1 =  3;
const numero2 = 1;
const numero3 = 6;

let suma = numero1 + numero3;
console.log (suma);
let resta = numero1 - numero3;
console.log (resta);
let multiplicacion = numero1 * numero3;
console.log (multiplicacion);
let division = numero1 / numero3;
console.log (division);
//en una división (numero / 0) será igual a infinity
//y una división (0 / 0) será Not a Number (NaN)*/

/*// si no definimos una variable y sacamos el typeof de esa variable nos dará: undefined
let numero1;
console.log (typeof (numero1);

let numero2 = 0;
let numero3 = 0;
let division = numero2/numero3;
console.log (division); //dará: NaN
console.log (typeof (division)); //dará: number
//NaN no es un type de valor primitivo (undefined, boolean, number, string, symbol, null)*/

//cualquier cosa en JS se puede definir como object;
//Los datos no obligatorios que hemos dejado en blanco en la base de datos de un formulario no se quedan en blanco sinó que son NULOS (NULL)
//JS es un lenguaje INTERPRETADO, NO COMPILADO Y DEVILMENTE TIPADO (se puede redefinir cualquier variable let)
/*//Los BOOLEAN (booleanos) son la lecturaa de la computadora: corriente/no corriente.... 1/0..... true/false
let boolean = true;
console.log (typeof(boolean));*/

/*let numero1 =  3;
const numero2 = 1;
const numero3 = 6;*/

//const userName = prompt("Por favor, introduce tu nombre");
//console.log("El nombre del usuario es", userName);
//prompt ...es como el alert, una caja que me permite interactuar.

/*const numero1 = prompt("Dame el primer número:");
const numero2 = prompt("Dame el segundo número:");
const producto = numero1 * numero2;
console.log (producto);
console.log (typeof(producto));*/

//concatenar texto:
//console.log("El nombre del usuario es " + userName + " y és Desarrollador"); me lo devolverá como un String si uno de los valores es texto

const numero1 = parseInt (prompt ("dame un primer número"));
const numero2 = parseInt (prompt ("dame un segundo número"));
const numero3 = parseInt (prompt ("dame un tercer número")); //parseInt nos identifica el tipo de valor

let suma = numero1 + numero2 + numero3;
console.log ("La suma de los 3 números es: "+ suma);// también se puede poner:  console.log (numero1 + numero2 + numero3)
console.log(typeof(suma));

let resta = numero1 - numero2 - numero3;
console.log (resta);
console.log(typeof(resta));

let multi = numero1 * numero2 * numero3;
console.log (multi);
console.log(typeof(multi));

let divide = numero2 / numero3;
console.log (divide);
console.log(typeof(divide));
