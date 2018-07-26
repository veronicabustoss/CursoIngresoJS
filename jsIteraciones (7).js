function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador ++;
		acumulador=acumulador+numero;

		respuesta=prompt("¿Quiere continuar?");

	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN