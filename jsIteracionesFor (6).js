function mostrar()
{ 	

	var numero=prompt("ingrese un numerito");
	var contador; //empiezo a contar
	var pares=0;



	for( contador=1 ; contador<=numero /*analizo todos los numeros que me da el usuario*/; contador ++ )
	{

		if(contador%2==0)
		{
			console.log(contador);
			pares ++; //nueva variable pares para que los cuente 
		}
		

	}

	console.log("la cantidad de numeros pares fue "+ pares)
}//FIN DE LA FUNCIÓN