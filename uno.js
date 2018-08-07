
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingrese un numero");
	altura=prompt("Ingrese un numero");
	superficie=(base*altura)/2;
	perimetro=base*3;

	alert("La superficie es "+ superficie+ " y el perimetro es "+perimetro);

}
