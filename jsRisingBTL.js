/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad; 
 	var sexo; 
 	var estadoCivil; 
 	var sueldoBruto; 
 	var legajo; 
 	var nacionalidad;

 	edad=prompt("Ingresar edad:");

 	while(edad<18 || edad>90)
 	{
 		edad=prompt("Edad no valida, ingresar edad entre 18 y 90 inclusive:");
 	}

 	document.getElementById('Edad').value=edad;

 	sexo=prompt("Ingrese su sexo, 'M' o 'F':");

 	while(sexo!="F" && sexo!="M")

 	{
 		sexo=prompt("Sexo no valido, ingresar 'F' o 'M':");
 	}

 	document.getElementById('Sexo').value=sexo;

 	estadoCivil=prompt("Ingresar numero para estado civil= 1-Solter@, 2-Casad@, 3-Divorciad@, 4-Viud@:");

 	while(estadoCivil!= "1" && estadoCivil!= "2" && estadoCivil!= "3" && estadoCivil!= "4") //se utilizo un switch por los 4 casos, preguntar luego.
 	{
 		estadoCivil=prompt("Estado civil no valido, Ingresar numero para estado civil= 1-Solter@, 2-Casad@, 3-Divorciad@, 4-Viud@:")
 	}

 	document.getElementById('EstadoCivil').value=estadoCivil;

 	sueldoBruto=prompt("Ingrese su sueldo bruto, no menor a 8000:");

 	while (sueldoBruto<8000)
 	{
 		sueldoBruto=prompt("Sueldo bruto no valido, ingrese su sueldo bruto no menor a 8000:");
 	}

 	document.getElementById('Sueldo').value=sueldoBruto;

 	legajo=prompt("Ingrese numero de legajo  de 4 cifras, sin ceros a la izquierda.");

 	while(legajo>9999 || legajo<999)
 	{
 		legajo=prompt("Legajo invalido,ingresar su numero de legajo de 4 cifras, sin ceros a la izquierda.");
 	}

 	document.getElementById('Legajo').value=legajo;

 	nacionalidad=prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados:")

 	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
 	{
 		nacionalidad = prompt("Invalido, ingrese su nacionalidad, “A” para argentin@s, “E” para extranjer@s, “N” para nacionalizad@s: ");
 	}

 	document.getElementById('Nacionalidad').value=nacionalidad;
}
