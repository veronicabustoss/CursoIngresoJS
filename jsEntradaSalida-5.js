/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	nombre=prompt("ingrese su nombre");
	document.getElementById('elNombre').value=nombre;
	edad=prompt("ingrese su edad");
	document.getElementById('laEdad').value=edad;
	alert("Usted se llama " + nombre + " y tiene " + edad +" años ");/*cuando voy a pegar un texto con una variable me tengo que acordar del valor de mas*/

}

