function mostrar()
{
	var numero=prompt("Ingrese un numerillo");
	numero=parseInt(numero);
	var contador=0;
	var divisores=0;
	var numeroPrimo;
	var bandera=0;

	for( contador=1; contador<=numero ; contador++ )
	{
		if(numero%contador==0)
		{
			divisores ++;
		}
	}

	if(divisores<3)
	{
		alert("El numero es primo " );
	}
	else
	{
		alert("El numero no es primo");
	}

}//FIN DE LA FUNCIÓN