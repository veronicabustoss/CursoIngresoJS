function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Ustes es un niño");
	}
		else /*si tambien*/
		{	
			if(edad>17)
			{
				alert("Usted es un mayor");
			}
				else
				{
					alert("Usted es un adolencente");
				}

		}	
				

		


	/* estamos utilizando mucho el if if(edad>=18)
	{
		alert("Usted es mayor de edad");
	}

	if(edad>12 && edad<18)

	{
		alert("Usted es adolencente");
	}

	if(edad<=13)
	{
		alert("Usted es un niño")
	}

	/*cuando hay tres opciones no se pueden poner los else*/

}//FIN DE LA FUNCIÓN