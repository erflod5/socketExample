//var sock =new WebSocket("ws://localhost:5001");
var sock = new WebSocket("ws://13.59.203.226:3001"); //replace this address with the one the node.js server prints out. keep port 3000
var display = document.getElementById("display");
sock.onopen = function(event) {
  alert("Socket connected succesfully!!!");
};

sock.onmessage = function(event) {
  console.log(event); //show received from server data in console of browser
  display.innerHTML += event.data + "\n"; //add incoming message from server to the log screen previous string + new string(message)
};

function traduccion(cadenaMorse) {
  display.innerHTML += cadenaMorse + "\n";
}