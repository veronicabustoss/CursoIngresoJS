function mostrar()
{
	var contador=0;
	var acumuladorVentas=0;
	var nombre;
	var paginas;
	var ventas;
	var tema;

	var cantidadPaginasPares=0;
	var cantidadPaginasImpares=0;

	var promedioVentas;

	var paginasProgramacion;
	var programacion;
	var sumaPaginasProg=0;
	
	var contadorCerosVentas=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador ++;
		nombre=prompt("Ingrese el nombre del libro");

		paginas=prompt("Ingrese la cantidad de paginas");
		paginas=parseInt(paginas);

		while(isNaN(paginas) || paginas<0)
		{
			paginas=prompt("Paginas no validas, ingrese la cantidad de paginas");
		}

		ventas=prompt("Ingrese la cantidad de ventas, 0 o mas ");
		ventas=parseInt(ventas);

		while(isNaN(ventas) || ventas<0)
		{
			ventas=prompt("Cantidad de ventas no valida, ingrese cantidad de ventas entre 0 o mas");
			ventas=parseInt(ventas);
		}	
		
		acumuladorVentas=acumuladorVentas + ventas;

		tema=prompt("Ingrese el tema del libro, 'robotica', 'programacion', 'patrones' o 'base de datos'");

		while(tema!= "robotica" && tema!="programacion" && tema!="patrones" && tema!="base de datos")
		{
			tema=prompt("Tema no valido. Ingrese el tema del libro, 'robotica', 'programacion', 'patrones' o 'base de datos' ");
		}

		respuesta=prompt("¿Desea continuar?");

		if(contador==1)
		{
			paginasProgramacion=paginas;
			programacion=tema;
		}

		if(tema=="programacion")
		{
			paginasProgramacion=paginas;
			programacion=tema;
			sumaPaginasProg= sumaPaginasProg+ paginas;
		}

		if(paginas%2==0)
		{
			cantidadPaginasPares ++;
		}
		else
		{
			cantidadPaginasImpares ++;
		}

		if(ventas==0)
		{
			contadorCerosVentas ++;
		}


	}

	promedioVentas=acumuladorVentas/contador;

	document.write("a) La cantidad de libros con páginas pares es " + cantidadPaginasPares+ "<br>");
	document.write("b) La cantidad de libros con páginas impares es " + cantidadPaginasImpares + "<br>");
	document.write("c) La cantidad de ceros ventas es " +contadorCerosVentas + "<br>");
	document.write("d) El promedio de todas las ventas ingresadas es " + promedioVentas+ "<br>");
	document.write("e) La suma de todas las páginas de los de 'programacion'" + sumaPaginasProg+ "<br>");
}
