function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	
	if(edad>17 && estadoCivil== "Soltero")
	{
		alert("Es soltero y ni es menor");
	}


}//FIN DE LA FUNCIÓN