function mostrar()
{
	var num1;
	var num2;
	var resultado;

	num1=prompt("Ingrese su primer numero");
	num2=prompt("Ingrese su segundo numero");

	if(num1==num2)
	{
		resultado= num1+ num2;
	}
	else
	{
		num1= parseInt(num1);
		num2= parseInt(num2);

		if(num1>num2)
		{
			resultado=num1/num2;
		}
		else
		{
			resultado=num1+num2;
			if(resultado<50)
			{
				alert("La suma es "+resultado+ " y es menor a 50");	
			}
		}
	}
	alert("El resultado es "+resultado);
}
