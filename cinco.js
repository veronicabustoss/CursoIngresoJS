function mostrar()
{
	var dia;

	dia=prompt("Ingrese un dia de la semana");

	switch (dia)
	{
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			alert("a trabajar!");
			break;
		case "Sabado":
		case "Domingo":
			alert("Buen finde!");
			break;
		default:
			alert("No es un dia valido");

	}
}
