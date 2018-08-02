// Put all your JavaScript in this file!
function colorchooser() {
	var x = prompt("enter a color:")
	var y=document.getElementsByTagName("body")
	y[0].style.backgroundColor = x
}
var currentIndex = 0;
var colors = ["red", "yellow", "green", "blue", "purple"]
var z = document.getElementsByTagName("button")
var t=document.getElementsByTagName("body")
z[1].addEventListener("click", function (event) {
	nextcolor();
});
function nextcolor(){
	currentIndex++;
  	if (currentIndex >= colors.length) {
    	currentIndex = 0;
    }
	t[0].style.backgroundColor = colors[currentIndex];
}

  
