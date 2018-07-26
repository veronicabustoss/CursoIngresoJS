function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Usted es un niño");
	}
	else //si tambien
	{
		if(edad>17)
		{
			alert("Usted es mayor de edad");
		}
			else
			{
				alert("Usted es un adolescente");
			}
	}


}//FIN DE LA FUNCIÓN