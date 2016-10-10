//Ejercicio 2: Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. A continuación muestra el contenido en un mensaje.
/*
INICIO
declarar variable nombres, definirlo como arreglo
PARA variable i empieza en cero; mientras i menor a tres; ve aumentando i;
entrada : nomb "Introduce el nombre deseado"
agrega mediante push nomb a nombres
termina ciclo para
IMPRIME el arreglo nombres

*/


var nombres = [];
for (var i = 0; i < 3; i++ ) {
	var nomb = prompt ("Introduce el nombre deseado");
	nombres.push(nomb);
}
alert ("Los nombres son " + nombres);