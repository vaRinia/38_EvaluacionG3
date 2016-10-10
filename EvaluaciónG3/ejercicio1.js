//Ejercicio 1: <br>Haz el juego de piedra papel o tijera con 3 turnos

/*
INICIO
ENTRADA nombre1 jugador 1;
ENTRADA nombre1 jugador 2;
Asignar marcador1 = 0;
Asignar marcador2 = 0;
PARA (variable i empieza en cero; mientras i menor a tres; ve aumentando i;);
	ENTRADA opcion jugador1;
	ENTRADA opcion jugador2;

	SI JUGADOR1 dice PIEDRA
		SI JUGADOR 2 dice PAPEL:
		entonces DISPLAY gana jugador 2;
		marcador 2 aumentar uno;
		
		SI NO SI JUGADOR 2 dice TIJERA:
		entonces DISPLAY gana jugador1;
		marcador 1 aumenta en uno;

		SI NO
		entonces DISPLAY empatados, no hay puntos;

	SI NO, SI JUGADOR 1 dice PAPEL:
		SI JUGADOR 2 dice PIEDRA:
		entonces DISPLAY gana jugador 1;
		marcador 1 aumentar uno;
		
		SI NO SI JUGADOR 2 dice TIJERA:
		entonces DISPLAY gana jugador 2;
		marcador 2 aumenta en uno;

		SI NO
		entonces DISPLAY empatados, no hay puntos;

	SI NO 
		SI JUGADOR 2 dice PAPEL:
		entonces DISPLAY gana jugador 1;
		marcador 1 aumentar uno;
		
		SI NO SI JUGADOR 2 dice PIEDRA:
		entonces DISPLAY gana jugador 2;
		marcador 2 aumenta en uno;

		SI NO
		entonces DISPLAY empatados, no hay puntos;		

termina el ciclo para

si marcador dos igual a marcador uno
display HAY UN EMPATE
si marcador uno mayor a marcador dos
display GANA Jugador 1
si marcador dos mayor a marcador 1
display GANA Jugador 2
FIN
*/


var nombre1 = prompt("Introduce nombre jugador 1");
var nombre2 = prompt("Introduce nombre jugador 2");
var marcador1 = 0;
var marcador2 = 0;
for (var i = 0; i < 3; i++) {
var jugador1 = prompt(nombre1 + " Introduce piedra, papel, tijera");
var jugador2 = prompt(nombre2 + " Introduce piedra, papel, tijera");
if (jugador1 == "piedra") {
	if (jugador2 == "papel") {
		marcador2 += 1;
		alert ("Gana " + nombre);
		
	} else if (jugador2 == "tijera") {
		marcador1 += 1;
		alert ("Gana " + nombre);
		
	} else {
		alert("Empate, no hay puntos");
	}
} else if (jugador1 == "papel") {
	if (jugador2 == "piedra") {
		marcador1 += 1;
		alert ("Gana " + nombre);
		
	} else if (jugador2 == "tijera") {
		marcador2 += 1;
		alert ("Gana " + nombre2);
		
	} else {
		alert("Empate, no hay puntos");
	}
} else if (jugador1 == "tijera") {
	if (jugador2 == "papel") {
		marcador1 += 1;
		alert ("Gana " + nombre1);
		
	} else if (jugador2 == "piedra") {
		marcador2 += 1;
		alert ("Gana " + nombre2);
		
	} else {
		alert("Empate, no hay puntos");
	}
}
}; //termina ciclo
(marcador2 === marcador1) ? alert("¡Está reñido!, hay un empate") : (marcador2 < marcador1) ? alert("Gana indiscutiblemente " + nombre1 + " con " + marcador1 + " contra " + marcador2 + " puntos del looser") : alert("Gana indiscutiblemente " + nombre2 + " con " + marcador2 + " contra " + marcador1 + " puntos del looser");


