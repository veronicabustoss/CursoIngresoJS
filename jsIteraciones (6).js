function mostrar()
{

	var contador=0; // cuenta sobre una variable y literal y fija
	var acumulador=0;
	var numero; // el numero va variando

	while(contador<5) //no hacer el procedimiento aca osea suma y resta etc
	{	
		numero=prompt("Ingrese numerito");
		numero=parseInt(numero);
		contador ++;
		acumulador= acumulador+ numero; 
	}
	promedio=acumulador/contador; //es lo mismo que esta abajo
	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN