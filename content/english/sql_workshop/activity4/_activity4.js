function sqlToTable(headers, data) 
{
	var tbl = document.getElementById("table");
	var row;
	var cell;
	var i;
	var j;
	var k;
	
	/*insert headers onto first row */
	row = tbl.insertRow();
	for(i = 0; i < headers.length; i++)
	{
		cell = row.insertCell();
		tbl.rows[0].cells[i].innerHTML = headers[i];
	}

	/*fill in table*/
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
	
	ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
	
	var ansArr = ans.split(',');
	var headArr = [];
	var i;
	for( i = 0; i < ansArr.length; i++)
	{
		headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
	}

	sqlToTable(headArr, array);
	
	var ans = "SELECT planet, leader FROM galaxy;";
	
	if(document.getElementById("commands").value == ans)
	{
		document.getElementById("story").innerHTML = "Amazing work as always, space cadet! You discovered that the Planet of Fun's Dear Leader is Olivia Windsor! Now you need to figure out a way to get to them!";
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}
