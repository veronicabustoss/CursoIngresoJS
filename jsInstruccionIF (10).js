function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random() * 10) + 1;

	if(nota>6)
	{
		alert(nota+" EXCELENTE");
	}
	else
	{
		if(nota<4)
		{
			alert(nota+" Vamos, la proxima se puede");

		}

	else
	{
		alert(nota+" APROBO");
	}

	}

}//FIN DE LA FUNCIÓN