function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var descuentoDinero;
	var precioDescuento;
	var iva;

	precio=prompt("Ingrese el precio");
	porcentajeDescuento=prompt("Ingrese el porcentaje de descuento");
	descuentoDinero=(precio*porcentajeDescuento)/100;
	precioDescuento=precio-descuentoDinero;
	iva=(precio*21)/100;

	alert("1. el descuento en dinero es "+porcentajeDescuento +" 2. El precio con el descuento es "+ precioDescuento + " El iva es "+iva);
	document.getElementById('elPrecioFinal').value=precioDescuento-iva;



}

