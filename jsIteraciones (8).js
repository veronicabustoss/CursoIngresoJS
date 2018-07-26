function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numerito");
		numero=parseInt(numero);
		contador ++;
		positivo=positivo+numero;
		negativo=negativo*numero;
		respuesta=prompt("¿Quiere continuar?");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN