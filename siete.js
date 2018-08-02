function mostrar()
{	 
	//poner el nombre del mas viejo.
	//nota del mas chico;

	var nota;
	var edad;
	var sexo;
	var contador;
	var acumulador=0;
	var promedio;
	var peorNota;
	var sexoPeorNota;
	var nombreMasVieje;
	var edadMasvieje;
	var masChico;
	var notaMasChico;
 //le asigne el valor porque si es igual a cero me da que la nota baja es igual a cero, no estaria bien.



	while(contador<5)
	{	
		contador ++;
		
		nombre=prompt("Ingrese su nombre");
		
		sexo=prompt("Ingrese su sexo 'f' o 'm'");

		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt("Sexo no valido, ingrese su sexo 'f' o 'm'");
		}

		nota=prompt("Ingrese una nota entre 0 y 10");
		nota=parseInt(nota);


		while(isNaN(nota) || nota<0 || nota>10)
		{
			nota=prompt("Nota no valida, ingrese una nota entre 0 y 10");
		}

		edad=prompt("Ingrese su edad, entre 0 a 100");
		edad=parseInt(edad);

		while(isNaN(edad) || edad<0 || edad>100) //IsNaN es que no ingreso un numero
		{
			edad=prompt("Edad no valida, ingrese nuevamente");
		}

		acumulador=acumulador+nota;

		if(contador==1)
		{
			sexoPeorNota=sexo;
			peorNota=nota;
			nombreMasVieje=nombre;
			edadMasvieje=edad;
			masChico=edad;
			notaMasChico=nota;
		}
		else
		{
			if(nota<peorNota)
			{
				peorNota=nota;
				sexoPeorNota=sexo;
			}

			if(edad>edadMasvieje)
			{
				nombreMasVieje=nombre;
				edadMasvieje=edad;	
			}
			if(edad<masChico)
			{
				masChico=edad;
				notaMasChico=nota;
			}

		}

	}

	promedio=acumulador/contador;

	alert("a) El promedio de las notas totales es " + promedio + "\nb) La nota más baja es " + notaBaja +" y el sexo de esa persona es "+ sexoBajo + "\nc) La cantidad de varones que su nota haya sido mayor o igual a 6 es "+contadorVaron);


}
