function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<18 && edad>12)
	{
		alert("Usted es un adolescente");
	}

}//FIN DE LA FUNCIÓN