$(document).ready(function(){
	createGrid(16);
	$(".square").mouseenter(function(){
		$(this).css("background-color", "#FF0066");
	});

	$(".clear").click(function(){
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function(){
			$(this).css("background-color", "#FF0066");
		});
	});

	$(".randomColor").click(function(){
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function(){
			$(this).css("background-color", getRandomColor());
		});
	});

	$(".opacity").click(function(){
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function(){
			reduceOpacity($(this));
		});
	});

	$(".spotlight").click(function(){
		setGrid();
		$(".square").unbind();
		$(".square").mouseenter(function(){
			$(this).css("opacity", "0");
		});
		$(".square").mouseleave(function(){
			$(this).css("opacity", "1");
		});
	});
});


function cleanUp() {
	$(".square").css("background-color", "black");
}

function createGrid(n) {
	var size = 960;
	var boxsize = 960/n;
	var wrap= $(".wrap").html("");
	for (i=0; i<n; i++) {
		for (j=0; j<n; j++) {
			wrap.append($("<div></div>").addClass("square").height(boxsize).width(boxsize));		
		}
		wrap.append($("<div></div>").css("clear", "both"))
	}
}

function setGrid() {
	var x = prompt("What size grid would you like? (1-100)")
	if (x>=1 && x<= 100) {
		createGrid(x);
		cleanUp();
	}
	else {
		alert("I'm sorry, I can't do that.")
	}
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i<6; i++) {
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

function reduceOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1;
	if (nextOpacity>0) {
		elem.css('opacity', nextOpacity);
	}
	else {
		elem.css('opacity', '0');
	}
}