// Put all your JavaScript in this file!
function colorchooser() {
	var x = prompt("enter a color:")
	var y=document.getElementsByTagName("body")
	y[0].style.backgroundColor = x
}