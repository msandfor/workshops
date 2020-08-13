function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  ev.target.appendChild(document.getElementById(data));
  var div_num = ev.currentTarget.id;
 
  
  if(div_num == "div4" && data == "drag1") {
    alert("You found the correct ladder! Go talk to the Dear Leader!");
	
	//Display next mission prompt
    var display1 = document.getElementById("text1");
    display1.setAttribute("style","visibility:visible");
	
	//Turn box green
	var box = document.getElementById("div4");
	box.setAttribute("style","border:5px solid lime");
  }
  else if(div_num == "div4") {
    alert("Try again Space Cadet!");
  }
  
}

function check(){


}
