/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	
			//numeroUno= "6";
			//numeroDos= 6;
	numeroUno=document.getElementById('numeroUno').value;/*el instert sirve para escribir por encima de donde estoy*/
	numeroDos=document.getElementById('numeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos)

	resultado=(numeroUno+numeroDos);
	alert(resultado);

}

