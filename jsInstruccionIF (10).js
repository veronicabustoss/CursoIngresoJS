function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		alert(nota+" EXCELENTE");
	}
	else //Una vez generado un else, si quiero volver a poner otro, tengo que meter el else dentro del mismo
	{
		if(nota<4)
		{
			alert(nota+" Vamos, la proxima se puede");
		}
			else //aca se introducio un else, dentro de otro
			{
				alert(nota+" APROBÓ");
			}
	}

}//FIN DE LA FUNCIÓN