
let grouping = document.querySelector(".grouping");
let marginWidth;
let aboutBtn = document.querySelector("#about-btn")
let workBtn = document.querySelector("#work-btn")
let projectCont = document.querySelector(".dos");
let windowHeight;
let windowWidth = $(window).innerWidth();
let bgOneHeight = [];
let bgOneWidth = [];


function calculatePaddings(){
	let contentWidth = document.querySelector(".conty").clientWidth;
	windowWidth = $(window).innerWidth();
	var p = document.querySelector(".padding-conty");
	var pStyle = p.currentStyle || window.getComputedStyle(p);
	let marginStyle = parseFloat(pStyle["padding-left"], 10);
	marginWidth = (windowWidth - contentWidth) / 2 + marginStyle;
}

function resizePaddings() {

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		let toggleWidth = document.querySelector(".toggle").clientWidth;
		let groupingWidth = document.querySelector(".grouping").clientWidth;
		console.log(toggleWidth);
		let groupingRight = windowWidth/2 - toggleWidth/2;
		grouping.style.right = `${groupingRight}px`;
	}
	else {
		grouping.style.right = `${marginWidth}px`;
	}
}

function resizeFullHeight() {
	projectCont.style.height = `${windowHeight - 120 - 64}px`
}

function calculateHeights() {
	windowHeight = $(window).height();
	setTimeout(function(){
		document.querySelectorAll(".bgone").forEach(function(section,i){
			bgOneHeight[i] = section.offsetHeight;
			bgOneWidth[i] = section.offsetWidth;
			document.querySelectorAll(".bgoneimg")[i].style.height = `${bgOneHeight[i]}px`;
document.querySelectorAll(".bgoneimg")[i].style.width = `${bgOneWidth[i]}px`;
		})
	// 		bgOneHeight = document.querySelector("#bgone").offsetHeight;
	// console.log(bgOneHeight)
	// bgOneWidth = document.querySelector("#bgone").offsetWidth;
	// document.querySelector("#bgoneimg").style.height = `${bgOneHeight}px`;
	// document.querySelector("#bgoneimg").style.width = `${bgOneWidth}px`;
	}, 1);



}

calculatePaddings();
resizePaddings();
calculateHeights();
resizeFullHeight();

window.addEventListener('resize', function () {
	calculatePaddings();
	resizePaddings();
	calculateHeights();
	resizeFullHeight();
});

  let wS = $(this).scrollTop();

  function scrollanimations(){
  	console.log(wS);
  	document.querySelector(".dos").style.filter = `blur(${wS/50}px)`
  }

    scrollanimations();

  $(window).scroll(function() {
    wS = $(this).scrollTop();
    scrollanimations();
    console.log(wS)
  });


aboutBtn.addEventListener("click", function() {
	window.location = "index.html#bio-cont"
});

workBtn.addEventListener("click", function() {
	window.location = "index.html#work-cont"
});




