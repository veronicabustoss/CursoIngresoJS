function mostrar()
{

	var contador=0;
	var acumulador=0; //preguntar para que serviria el acumulador en este caso.
	var numero;

	while(contador<5)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador ++;
		acumulador=acumulador+numero;
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN