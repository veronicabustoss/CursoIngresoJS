function mostrar()
{

	var contador=0;
	var numero; //no se le pone cero;
	var maximo; //no se le determina valor a los maximos y minimos
	var minimo;
	var bandera=0;

	// declarar variables
	var respuesta='si'; //no entendi, preguntar luego.

	while (respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(bandera==0) //La bandera sirve para saber la primer vuelta, el contador puede ser una bandera.                
		{
			minimo=numero;
			maximo=numero;
			bandera=1;
		}


		if(numero>maximo)
		{	
			maximo=numero;
		}	

			if(numero<minimo)
			
			{
				minimo=numero;
			}

			

		respuesta=prompt("¿Desea continuar?");
	}



	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




//ejercicio incompleto


}//FIN DE LA FUNCIÓN