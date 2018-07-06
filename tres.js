function mostrar()
{
	var precio;
	var porcentaje;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;

	precio=prompt("Ingresar precio");
	porcentaje=prompt("Ingresar porcentaje");
	descuentoEnDinero=(precio*porcentaje)/100;
	precioConDescuento=precio-(descuentoEnDinero);
	iva=(precio*21)/100;



	alert(descuentoEnDinero);
}
