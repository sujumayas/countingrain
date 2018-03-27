var rainDrops = document.querySelectorAll(".rain-drop");
var baseColor = 000000;
console.log(rainDrops);
for (var i = rainDrops.length - 1; i >= 0; i--) {
	var posLeft = Math.random()*window.outerWidth;
	console.log(posLeft)
	rainDrops[i].style.left = posLeft+"px";
	rainDrops[i].style.animationDelay = (Math.random()*10)+"s";

	
}

var counter = 0;
document.addEventListener("animationiteration", function(e){
	counter++;
	renderCounter();
});


function renderCounter(){
	document.getElementById("counterDisplay").innerHTML = counter;
}