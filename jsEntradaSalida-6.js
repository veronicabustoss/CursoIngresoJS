/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);/*El parseInt se usa para numeros enteres, y cuando se accione el boton sala una cuenta y no los numeros juntos*/
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;

	alert("La suma es "+ resultado);
}

