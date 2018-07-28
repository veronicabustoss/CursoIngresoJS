function mostrar()
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
{

	var contador=0;
	//declarar contadores y variables 
	var respuesta= true;
	var numero;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var max;
	var flag = false;

	while(respuesta == true ) //es un while compuesto de if y de else
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero>0)
		{
			acumuladorPositivos= acumuladorPositivos+ numero;
			contadorPositivos ++;
		}
		else 
		{	
			if(numero<0)
			{
				acumuladorNegativos= acumuladorNegativos+ numero;
				contadorNegativos ++;
			}
			else
			{
				contadorCeros ++;
			}
		}


		respuesta= confirm("¿Desea Continuar?"); //el confirm vendria a confirmar con el aceptar.
	}

	document.write("1. Suma negativos "+ acumuladorNegativos +"<br>");
	document.write("2. Suma positivos "+ acumuladorPositivos +"<br>");
	document.write("3. Cantidad de negativos "+ contadorNegativos +"<br>");
	document.write("4. Cantidad de positivos "+ contadorPositivos +"<br>");
	document.write("5. Cantidad de ceros "+ contadorCeros +"<br>");

}//FIN DE LA FUNCIÓN