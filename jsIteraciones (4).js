function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>9) //es un bucle
	{
		alert("El numero ingresado no es valido");
		numero = prompt("ingrese un número entre 0 y 10.");
	}
	//ya a partir de aca, no es necesario el if
	document.getElementById('Numero').value=numero;
	


}//FIN DE LA FUNCIÓN