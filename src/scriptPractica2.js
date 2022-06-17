const celsiusTemperature = parseInt (prompt ("Que temperatura en Celsius quieres que te transforme a °KELVIN?"));
const constantKelvinTemperature = 273;

const changeTemperature = (celsiusTemperature + constantKelvinTemperature);
console.log (`Tu temperatura equivale a ${changeTemperature}°K`)