
let grouping = document.querySelector(".grouping");
let header = document.querySelector(".header");
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
	let marginStyle = parseFloat(pStyle["padding-left"], 0);
	if (contentWidth <= 1440){
		marginWidth = (windowWidth - contentWidth) / 2 + marginStyle;
	}
	else{
	marginWidth = (windowWidth - 1440 + 120) / 2;
}
}

function resizePaddings() {

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		let toggleWidth = document.querySelector(".toggle").clientWidth;
		let groupingWidth = document.querySelector(".grouping").clientWidth;
		console.log(toggleWidth);
		let groupingRight = windowWidth/2 - toggleWidth/2;
		grouping.style.right = `${groupingRight}px`;
		header.style.left = `${marginWidth}px`;
	}
	else {
		grouping.style.right = `${marginWidth}px`;
		header.style.left = `${marginWidth}px`;
	}
}

function resizeFullHeight() {
	projectCont.style.height = `${windowHeight - 120 - 64}px`
}

function calculateHeights() {
	windowHeight = $(window).height();



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
  	// if (wS < 200){
  	//  document.querySelector(".dos").style.filter = `blur(${wS/50}px)`;
  	// }
  }



  $(window).scroll(function() {
    wS = $(this).scrollTop();
    scrollanimations();
  });


aboutBtn.addEventListener("click", function() {
	window.location = "index.html#bio-cont"
});

workBtn.addEventListener("click", function() {
	window.location = "index.html#work-cont"
});




