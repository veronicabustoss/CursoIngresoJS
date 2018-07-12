function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;/*copiar tal cual esta*/

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadoCivil!="Soltero") /*Hay que copiar tal cual esta, agregar mayuscula, el! es para negar*/

	{
		alert("Es muy pequeño para NO ser soltero");
	}
	

	


	


}//FIN DE LA FUNCIÓN