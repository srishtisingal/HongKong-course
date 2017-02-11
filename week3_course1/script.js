var faces=5;
var level=-1;
var sw=$(window).width();
console.log(sw);
var mid=sw/2;
var sh=$(window).height();

function start_game() {
	level++;
	var k=Math.ceil(Math.random()*faces);
	console.log(k);
	for(var i=1;i<=faces;i++) {
		var smiley=document.createElement("img");
		var smiley1=document.createElement("img");
		smiley.src="smiley.png";
		smiley.alt="Smiley";
		smiley1.src="smiley.png";
		smiley1.alt="Smiley";
		var h=Math.floor(Math.random()*(sh-250));
		smiley.style.top=h+"px";
		smiley1.style.top=h+"px";
		var w=Math.floor(Math.random()*(mid-50));
		console.log(w);
		smiley.style.left=w+"px";
		smiley1.style.left=w+"px";
		document.getElementById('left').appendChild(smiley);
		if(i==k) {
			smiley.addEventListener('click',level_up);
		}
		else {
			smiley.addEventListener('click',function() {alert("Game Over!You completed "+level+" levels.");
														window.location.reload(true);});
			document.getElementById('right').appendChild(smiley1);
			smiley1.addEventListener('click',function() {alert("Choose from the Left Side!");});
		}
	}
}

function level_up() {
	var thenode=document.getElementById('left');
	var thenode2=document.getElementById('right');
	while(thenode.firstChild) {
		thenode.removeChild(thenode.firstChild);
	}
	while(thenode2.firstChild) {
		thenode2.removeChild(thenode2.firstChild);
	}
	faces=faces+5;
	start_game();
}