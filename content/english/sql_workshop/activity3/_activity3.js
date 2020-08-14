function sqlToTable(headers, data) 
{
	var tbl = document.getElementById("table");
	var row;
	var cell;
	var i;
	var j;
	var k;
	
	row = tbl.insertRow();
	for(i = 0; i < headers.length; i++)
	{
		cell = row.insertCell();
		tbl.rows[0].cells[i].innerHTML = headers[i];
	}

	for(k = 0; k < data.length; k++)
	{
		for(i = 0; i < data.length; i++)
		{
			row = tbl.insertRow();
			for(i = 0; i < data[0].length; i++)
			{
				cell = row.insertCell();
			}
		}
		
		for(i = 1; i < tbl.rows.length; i++)
		{
			for(j = 0; j < tbl.rows[i].cells.length; j++)
			{
				tbl.rows[i].cells[j].innerHTML = data[i - 1][j];
			}
		}
	}
}

function clearTable()
{
	var clear = document.getElementById("table");
	clear.innerHTML = "";
}

function sql() 
{
	clearTable();
	document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
	document.getElementById("sqlcommand").style.visibility="visible";
  
	var array = alasql("MATRIX OF " + document.getElementById("commands").value);
	
	document.getElementById("sqlcommand").style.visibility = 'hidden';
	
	var ans = JSON.stringify(alasql(document.getElementById("commands").value));
	
	/*"city_number":1    "name":"LEGO City"  "population":1500  "favorite_food":"Pizza"*/
	
	ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
	
	var ansArr = ans.split(',');
	var headArr = [];
	var i;
	for( i = 0; i < ansArr.length; i++)
	{
		headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
	}

	sqlToTable(headArr, array);
	
	if(headArr[0] == "COUNT(*)")
	{
		document.getElementById("story").innerHTML = "Oh no! You discover that the inhabitants are being invaded by the aliens from the planet Boredom. Press next to continue.";
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}
