window.onload = init;
function init ()
{
    ajaxInit() 
var klik = document.getElementById("button");
 {
    klik.click = function()
    {
        alert("aaaaa")
        suggestBox()
    }
 }
}
//inicjalizacja ajaxa
function ajaxInit() 
{
	var XHR = null;

	try 
	{
		XHR = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			XHR = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e2)
		{
			try
			{
				XHR = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e3)
			{
				alert("Niestety Twoja przeglądarka nie obsługuje AJAXA");
			}
		}
	}
	
	return XHR;	
}
//inicjalizacja dokumentu XML
function suggestBox()
{
	var XHR = ajaxInit();
	
	if (XHR != null)
	{
		XHR.open("POST", "php.php"+"?random="+Math.random(), true);
		
		XHR.onreadystatechange = function()
		{
		    if (XHR.readyState == 4)
			{
				if (XHR.status == 200) 
				{
					XMLMainElement = XHR.responseXML.documentElement;
				}
				else alert("Wystąpił błąd " + XHR.status );
			}
		}
		
		XHR.send(null);
	}
	
}