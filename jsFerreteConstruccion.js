/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var radio;
	var cuenta;
	

		ancho=document.getElementById('Ancho').value;
		
		largo=document.getElementById('Largo').value;
		
		radio=document.getElementById('Radio').value;
	

		cuenta=((ancho*2)+(largo*2))*3

		alert("El alambre debe medir "+cuenta);

}
function Circulo () 
{
	var ancho;
	var largo;
	var radio;
	var cuenta;
	

		ancho=document.getElementById('Ancho').value;
		
		largo=document.getElementById('Largo').value;
		
		radio=document.getElementById('Radio').value;/*para calcular la circunferencia, se debe 
		multiplicar el radio por dos, luego por PI(3.14) y luego multiplicarle 3*/
	
		cuenta=((radio))

		alert("El alambre debe medir "+cuenta);
}
function Materiales () 
{
	
}