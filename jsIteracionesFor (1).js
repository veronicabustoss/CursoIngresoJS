function mostrar()
{	
	var contador;	
	contador=0;
	for(  ; ; ) // seria ( ; ; )
	//for infinito, se tiene que dejar el espacio, es importante el punto y coma. el primer espacio cuando empieza, el segundo el relleno y el ulimo cuando termina el for;
	{
		contador ++  //si lo saco, se me tilda todo;
		console.log(contador);
		if(contador==5 )
		{
			break;
		}
	}
	console.log("Termino con: " + contador); // es lo mismo que el while 
	
	//para salir de un FOR se corta con el break;

	/* otra manera de hacerlo es 

	var contador;

	for(contador=0 1toma el valor la primera vez ; contador<5 2compara y vuelve arriba, entonces ejecuta el contador ; contador ++ 3se pregunta cuando termina.)
	{
		console.log(contador);
	}

	console.log("Termino con "+contador); */

}