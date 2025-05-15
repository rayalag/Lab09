/*
let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");


alert("Hola " + nombre + ", tienes " + edad + " años.");


console.log("Nombre ingresado:", nombre);
console.log("Edad ingresada:", edad);

let edad2 = prompt("¿Cuántos años tienes?");
let nombre2 = prompt("¿Cómo te llamas?");

console.log(typeof edad2);

console.log("¿Está vacío?", edad2 === "")

*/

/*Reto 1*/
let nombre = prompt("¿Cómo te llamas?");
let edad = prompt("¿Cuántos años tienes?");
let ciudad = prompt("¿En qué ciudad vives?");

/*Reto 2*/
alert("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");

alert("¡Bienvenido! Eres menor de edad");
alert("¡Bienvenido adulto independiente!");


/*Reto 3*/

alert(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);

/*Reto 4*/
if (edad < 18) {
  alert(`🧒 ¡Hola ${nombre}! Eres menor de edad y vives en ${ciudad}.`);
} else {
  alert(`🎉 ¡Hola ${nombre}! Eres mayor de edad y vives en ${ciudad}.`);
}

