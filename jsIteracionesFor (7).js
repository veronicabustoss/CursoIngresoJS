function mostrar()
{

	var numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	var contador;
	var divisores=0;

	for( contador=1 ; contador<=numero ; contador++)
	{
		if(numero%contador==0)
		{
			console.log(contador);
			divisores ++;

		}
	}	

	console.log("La cantidad de numeros divisores es "+divisores);

}//FIN DE LA FUNCIÓN