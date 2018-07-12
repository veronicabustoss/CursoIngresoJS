function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

		if(edad<18 && edad>12)

			{
				alert("Es un adolencente");
			}




		/* 1) if(edad<17) es otra opcion.
		{ 
			if(edad>12)
			{ 		
				alert("Usted es un adolencente");

			}
		}*/

/*	2) if(13<=edad) una opcion.
		{ 
			alert("usted es adolencente");

		}

	if(edad>=17)
		{
			alert("usted es adolencente");

		}*/
		/* el && une , esto Y esto*/

}//FIN DE LA FUNCIÓN