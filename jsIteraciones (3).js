function mostrar()
{

	var clave = prompt("ingrese el número clave.");

	while (clave!="utn750")
	{
		alert("No es la clave, ingrese nuevamente");
		clave = prompt("ingrese el número clave.");
	}
	console.log("Bienvenido");

}//FIN DE LA FUNCIÓN
