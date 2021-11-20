function cotizarkittycare()
{
	var s = 0;
	for (i = 0; i < 4; i++)
		if (document.form1.checkbox[i].checked) 
			s += parseInt(document.getElementById('campo'+(i+1)).value);
	return s;
}
