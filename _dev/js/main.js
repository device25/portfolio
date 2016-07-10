window.onload = function() {
	var careerImg = document.getElementById("careerImg");
	document.getElementById("1").onmouseover = function() {
		careerImg.style.backgroundImage = "url(/img/career/romir.gif)";
		careerImg.style.backgroundSize = "contain";
	};
	document.getElementById("2").onmouseover = function() {
		careerImg.style.backgroundImage = "url(/img/career/mpgu.jpg)";
		careerImg.style.backgroundSize = "cover";
	};
	document.getElementById("3").onmouseover = function() {
		careerImg.style.backgroundImage = "url(/img/career/solncevo.png)";
		careerImg.style.backgroundSize = "cover";
	};
	document.getElementById("4").onmouseover = function() {
		careerImg.style.backgroundImage = "url(/img/career/health.png)";
		careerImg.style.backgroundSize = "contain";
	};
	document.getElementById("5").onmouseover = function() {
		careerImg.style.backgroundImage = "url(/img/career/health.png)";
		careerImg.style.backgroundSize = "contain";
	};
};