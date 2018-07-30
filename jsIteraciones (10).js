function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var contadorPares=0;
	var resto; //preguntar luego
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia=0; //porque es ciertos casos no se utiliza el cero y en otros si.
	var respuesta= "si";
	
	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero>0)
		{
			acumuladorPositivo= acumuladorPositivo+numero;
			contadorPositivo ++;
		}
		else //no entiendo porque no se usa llave
		{	
			if(numero<0)
			{	
				acumuladorNegativo=acumuladorNegativo+numero;
				contadorNegativo ++;
			}
			else
			{
				contadorCeros ++;
			}

			resto=numero%2;
			if(resto==0)
			{
				contadorPares ++;
			}	

		}

		respuesta=prompt("¿Desea continuar?");

	}

	promedioPositivos=acumuladorPositivo/contadorPositivo;
	promedioNegativos=acumuladorNegativo/contadorNegativo;

	diferencia=acumuladorPositivo - acumuladorNegativo;

	document.write("1. Suma negativos "+ acumuladorNegativo +"<br>");
	document.write("2. Suma positivos "+ acumuladorPositivo +"<br>");
	document.write("3. Cantidad de negativos "+ contadorNegativo +"<br>");
	document.write("4. Cantidad de positivos "+ contadorPositivo +"<br>");
	document.write("5. Cantidad de ceros "+ contadorCeros +"<br>");
	document.write("6. Cantidad de numeros pares "+ contadorPares +"<br>");
	document.write("7. Promedio de los positivos "+ promedioPositivos +"<br>");
	document.write("8. Promedio de los negativos "+ promedioNegativos +"<br>");
	document.write("9. Diferencia de los positivos y negativos  "+ diferencia +"<br>");

}//FIN DE LA FUNCIÓN