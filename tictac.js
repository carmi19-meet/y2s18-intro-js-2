var x = document.getElementsByTagName("button")
var currentIndex = 0;

for (var i=0;i<x.length; i+=2){
	x[i].addEventListener("click", function (event) {
	document.getElementById(i+1).style.visibility = "hidden"
	oo(event);
});
}
for (var i=1;i<x.length; i+=2){
	x[i].addEventListener("click", function (event) {
	document.getElementById(i-1).style.visibility = "hidden"
	xx(event);
});
}


function xx(event){
	event.target.style.visibility = "hidden";
}

function oo(event){
	event.target.style.visibility = "hidden";
}
