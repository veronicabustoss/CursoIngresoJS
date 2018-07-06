/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;/*existen numeros para incriptar, numeros especiales, solo son divisibles por si mismo. los primos*/
	var numeroDivisor;/*ese numero no es divisible por el numero que le estoy dando cuando el dividendo es menor que el divisor*/
	/*no es primo cuando tiene resto cero*/
	/*el signo % es modulo me da el resto, no es el de porcentaje, ejemplo: 10%2 es igual a 0, y 2%10 es igual a 2, que seria el resto*/
	var numeroResto;
	
	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=document.getElementById('numeroDivisor').value;
	numeroDivisor=parseInt(numeroDivisor);
	numeroResto=numeroDividendo%numeroDivisor;
	
	alert("El resto es "+ numeroResto);


}
