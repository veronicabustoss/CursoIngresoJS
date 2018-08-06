function mostrar()
{
	var nota;
	var sexo;
	var edad;
	var contador=0;
	var acumulador=0;
	var promedio;
	var notaBaja=0;
	var sexoBajo=0;
	var contadorVarones=0;
	var notaJoven=0;
	var joven=0;
	var sexoJoven=0;
	var contadorMujeres=0;
	var notaPrimerMujer=0;
	var edadPrimerMujer=0;


	while(contador<3)
	{
		contador ++;
		nota=prompt(contador +" Ingrese una nota del 0 al 10");
		nota=parseInt(nota);

		while(isNaN(nota) || nota>10 || nota<0)
		{
			nota=prompt(contador + " Nota no valida, ingrese una noa del 0 al 10");
			nota=parseInt(nota);
		}

		acumulador=acumulador+nota;

		edad=prompt(contador+ " Ingrese su edad");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<0)
		{
			edad=prompt(contador+ " Edad no validad, ingrese nuevamente");
		}

		sexo=prompt(contador+ " Ingrese el sexo 'f' o 'm'");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt(contador + " Sexo no valido, ingrese el sexo 'f' o 'm'.");
		}	

		if(contador==1)
		{
			notaBaja=nota;
			sexoBajo=sexo;
			notaJoven=nota;
			joven=edad;
			sexoJoven=sexo;

		}

		if(nota<notaBaja)
		{
			notaBaja=nota;
			sexoBajo=sexo;
			notaJoven=nota;
		}

		if(sexo=="m" && edad>=18 && nota>=6)
		{
			contadorVarones ++;
		}
		if(edad<joven)
		{
			notaJoven=nota;
			joven=edad;
			sexoJoven=sexo;
		}

		if(contadorMujeres==0 && sexo=="f")
		{
			notaPrimerMujer=nota;
			edadPrimerMujer=edad;
			contadorMujeres=1;
		}


	}

	promedio=acumulador/contador;

	alert("a) El promedio de las notas totales es "+ promedio + "\n b)La nota mas baja es "+ notaBaja + " y el sexo de esa persona es "+ sexoBajo + "\nc)La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6 es "+ contadorVarones + " d)El sexo y la nota del mas joven es " + sexoJoven + " con nota de " + notaJoven);

	if(contadorMujeres==0)
	{
		alert("No se ingresaron mujeres");
	}
	else
	{
		alert("La edad de la primer mujer ingresada es " + edadPrimerMujer + " y tiene una nota de " + notaPrimerMujer);
	}
}
