//no se a qué se refiere herencia, pero me parece que puede ser una estructura dentro de otra, un hijo que hereda propiedades del padre y aparte tiene propiedades propias
/*
INICIO
declara un prototipo llamado Persona
dentro de Persona: 
	declara variable de instancia nombre
	declara variable de instancia edad
	declara variable de instancia genero
	declara método obtDetalles

	declara prototipo llamado Estudiante
	dentro de Estudiante:
		declara variable de instancia curso
		declara variable de instancia grupo
		declara método llamado registrar

	declara prototipo llamado Profesor
	dentro de Profesor
		declara variable de instancia llamada aisgnatura
		declara variable de instancia llamada nivel
		declara método llamado asignar

FIN

		*/
		
function Persona (nombre,edad,genero) {
	this.nombre = "nombre";
	this.edad = "edad";
	this.genero = "genero";
	this.obtDetalles = function () {
		alert(Persona);	
	};
	function Estudiante (curso,grupo) {
		this.curso = "curso";
		this.grupo = "grupo";
		this.registrar = function () {

		};
	};
	function Profesor (asignatura,nivel) {
		this.asignatura = "asignatura";
		this.nivel = "nivel";
		this.asignar = function () {

		};
	};
	 
};

var maestro = new Profesor (ingles, segundo);
var alumno = new Estudiante (programacion, primero);
alert ("maestro");
alert ("alumno");

