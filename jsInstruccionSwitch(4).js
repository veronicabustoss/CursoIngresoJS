function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		case "Junio":
			alert("Tiene 28 dias");
			break;
		default:
			alert("Tiene 31 dias");
	}
	



}//FIN DE LA FUNCIÓN