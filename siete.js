function mostrar()
{
	var notas;
	var edad=0;
	var sexo;
	var contador=0;
	var acumulador=0;
	var promedio;
	var notaBaja=11;
	var sexoBajo;
	var contadorVaron=0;
	var edadJoven=9999;
	var sexoJoven;
	var notaJoven=0;
	var edadPrimeraMujer; //se utiliza cuando hay comparaciones el igual a cero.
	var bandera=0; 
	var notaPrimeraMujer;


	while(contador<2)
	{
		nota=prompt("Ingrese una nota entre 0 y 10");
		nota=parseInt(nota);
		contador ++; //no utilizar la variable dos veces si es que la utilizo dentro de un ciclo while.

		while(nota>10 || nota<0)
		{
			nota=prompt("Nota no valida ingrese nuevamente una nota entre 0 y 10");
		}

		acumulador=acumulador+nota;

		edad=prompt("Ingrese su edad")
		edad=parseInt(edad);

		while(edad<0 && edad>999)
		{
			edad=prompt("Edad no valida, ingrese nuevamente");
		}

		sexo=prompt("Ingrese su sexo 'f' o 'm'");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Sexo no valido, ingrese nuevamente 'f' o 'm' ");
		}

		if(nota<notaBaja)
		{
			notaBaja=nota;
			sexoBajo=sexo;
		}
		
			if(edad>18 && sexo=="m" && nota>=6)
			{
				contadorVaron ++;
			}

		if(edad<edadJoven)
		{
			edadJoven=edad;
			sexoJoven=sexo;
			notaJoven=nota;
		}

		if(bandera==0 && sexo=="f")  //revisar luego.
		{
			edadPrimeraMujer=edad;
			notaPrimeraMujer=nota;
			bandera=1; //cuando encuentre la primera mujer la banedra cambia a 1 para que la nota no cambie en el siguiente ciclo while.
		}
		

	}

	promedio=acumulador/contador;

	alert("a) El promedio de las notas totales es "+ promedio +" \nb) La nota mas baja es " + notaBaja  +" y el sexo de esa persona es "+ sexoBajo + " \nc) la cantidad de varones mayores a 18, que su nota a sido mayor o igual a 6 es "+ contadorVaron +" \nd) El sexo y la nota del más joven  es  "+ sexoJoven +" con nota de " + notaJoven );

	// el \n sirve como  un enter,  separando las palabras en fila ordenadas. 

	if(bandera==0)
	{
		alert("No se ingresaron mujeres.");
	}
	else 
	{
		alert("La edad de la primera mujer ingresada es " + edadPrimeraMujer + " con una nota de "+ notaPrimeraMujer);
	}	

}
