function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var acumuladorPeso=0;
	var promedioPeso;
	var contadorTemperaturaPar=0;
	var animalMasPesado;
	var masPesado=0;
	var masPesado1;
	var menosPesado=0 ;
	var menosPesado1;
	var temperaturaPesado;
	var temperaturaNoPesado;
	var temPesado;
	var masTemPesado;
	var animalMasPesadoTemp;
	var contadorAnimalCeroGrados=0;
	var respuesta="si";
	var contador=0;

	while(respuesta!="no")
	{
		contador ++;

		animal=prompt("Ingrese un animal");

		peso=prompt("Ingrese el peso, entre 1 y 1000");
		peso=parseInt(peso);

		while(isNaN(peso) || peso>1000 || peso<1)
		{
			peso=prompt("Peso no valido, ingrese el peso, entre 1 y 1000 ")
			peso=parseInt(peso);
		}

		acumuladorPeso=acumuladorPeso + peso;

		temperatura=prompt("Ingrese la temperatura del habitat, entre -30 y 30");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura) || temperatura>30 || temperatura<-30)
		{
			temperatura=prompt("Temperatura no valida, ingrese la temperatura del habitat, entre -30 y 30");
			temperatura=parseInt(temperatura);
		}

		respuesta=prompt("¿Desea continuar?");

		if(contador==1)
		{	
			animalMasPesado=animal;
			masPesado1=peso;
			menosPesado1=peso;
			temPesado=temperatura;
			masTemPesado=peso;
			animalMasPesadoTemp=animal;

		}
		if(temperatura<0)
		{	
				contadorAnimalCeroGrados ++;

				if(peso>masPesado1)
				{	
					masPesado ++;
					masPesado1=peso;
					animalMasPesado=animal;
					temperaturaPesado=temperatura;
				}
				else
				{
					if(peso<menosPesado1)
					{
						menosPesado ++;
						menosPesado1=peso;
						temperaturaNoPesado=temperatura;
					}
				}	
		}

		if(peso>masTemPesado)
		{
			masTemPesado=peso;
			temPesado=temperatura;
			animalMasPesadoTemp=animal;
		}
		
		if(temperatura%2==0)
		{
			contadorTemperaturaPar ++;
		}


	}

	promedioPeso=acumuladorPeso/contador;

	document.write("a) La cantidad de temperaturas pares es " + contadorTemperaturaPar + "<br>");
	document.write("b) El nombre y temperatura del animal más pesado es " + animalMasPesadoTemp  + " y " + temPesado+ "<br>");
	document.write("c) La cantidad de animales que viven a menos de 0 grados  " + contadorAnimalCeroGrados +"<br>");
	document.write("d) El promedio del peso de todos los animales es " + promedioPeso+"<br>");
	document.write("e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero, el maximo es"+ masPesado1 + " y el minimo es " + menosPesado1 +"<br>");


}
