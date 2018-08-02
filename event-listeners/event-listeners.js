// YOUR TASK: Add more pictures!
var pictures = ["./imgs/p1.jpeg", "./imgs/p2.jpeg","./imgs/p3.jpeg", "./imgs/p4.jpeg", "./imgs/p5.jpeg"];
var currentIndex = 0;
var x=document.getElementsByTagName("img")
x[0].addEventListener("click", function (event) {
	showNextPicture();
});


function showNextPicture() {
  currentIndex++;
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
}
	(event.target).src = pictures[currentIndex];

  
}

  // increment current picture
  // if currentIndex is too large, start from the beginning again


  // YOUR TASK: Finish this function!
