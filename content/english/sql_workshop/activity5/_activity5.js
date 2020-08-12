function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  ev.target.appendChild(document.getElementById(data));
  alert("You found the correct ladder! Go talk to the Dear Leader!");
}

function check(){

    //Display code block to drag
    var display1 = document.getElementById("planet");
    display1.setAttribute("style","visibility:visible");
}
