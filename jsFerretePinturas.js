/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//C = (ºF -32) / 1,8.
//°F = °C · 1.8 + 32
function FahrenheitCentigrados () 
{
	var temperatura;
	var resultado;

	temperatura=document.getElementById('Temperatura').value;
	temperatura=parceInt(temperatura);

	resultado=(temperatura- 32)/1.8;
	alert(temperatura+ " °F son "+ resultado+ "°C");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var resultado;
	temperatura = document.getElementById('Temperatura').value; 
	temperatura = parseInt(temperatura);
 	resultado = (temperatura * 1.8)+ 32; 
	alert(temperatura + "°C son " + resultado + "°F");
}
