function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<18 && edad>12)
	{
		//adolescente, no pongo nada
	}
	else
	{
		alert("USTED NO ES UN adolescente");/*lo contrario al if seria esto*/

	}


	/* OPCION 2 
	if(edad>=18 || edad<=12) /*las dos barras significan el O 
	{
		alert("Usted NO es un adolescente");
	}
	*/





	/*if(!(edad<18 && edad>12))/* con el! niego la condicion
		{	
		
			
				alert("Usted NO es adolescente");
			
			
		}*/

		

}//FIN DE LA FUNCIÓN