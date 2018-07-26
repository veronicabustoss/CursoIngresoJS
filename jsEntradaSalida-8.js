/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	
	var diviendo;
	var divisor;
	var resto;

	diviendo=document.getElementById('numeroDividendo').value;
	diviendo=parseInt(diviendo);
	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);

	resto=diviendo%divisor;

	alert("El resto es "+resto);
}	
	