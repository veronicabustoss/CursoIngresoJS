/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var canLamparas;
	var marca;
	var precioLampara;
	var precioFinal;
	var iibb;

	canLamparas=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;
	precioLampara= canLamparas*35;

	if(canLamparas>=6)
	{
		precioFinal=precioLampara-((precioLampara*50)/100);
	}
	else
	{
		if(canLamparas==5)
		{
			if(marca=="ArgentinaLuz")
			{
				precioFinal=precioLampara-((precioLampara*40)/100);
			}
			else
			{
				precioFinal=precioLampara-((precioLampara*30)/100);
			}
		}
		else
		{
			if(canLamparas==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					precioFinal=precioLampara-((precioLampara*25)/100);
				}
				else
				{
					precioFinal=precioLampara-((precioLampara*20)/100);
				}
			}
			else
			{
				if(canLamparas==3)
				{
					if(marca=="ArgentinaLuz")
					{
						precioFinal=precioLampara-((precioLampara*15)/100);
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							precioFinal=precioLampara-((precioLampara*10)/100);
						}
						else
							{
								precioFinal=precioLampara-((precioLampara*5)/100);
							}	
					}
				}
				else
				{
					precioFinal=precioLampara;
				}
			}
		}
	}

	if(precioFinal>120)
	{
		iibb=(precioLampara*10)/100;
		alert("Usted pago "+iibb +" de IIBB.");
		precioFinal=precioFinal+iibb;
	}

	document.getElementById('precioDescuento').value=precioFinal;
 }
