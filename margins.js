
let grouping = document.querySelector(".grouping");
let marginWidth;
  let aboutBtn = document.querySelector("#about-btn")
  let workBtn = document.querySelector("#work-btn")
  let projectCont = document.querySelector(".dos");
  let windowHeight;
  let windowWidth = $(window).innerWidth();
 

  function calculatePaddings(){
    let contentWidth = document.querySelector(".conty").clientWidth;
    windowWidth = $(window).innerWidth();
    var p = document.querySelector(".padding-conty");
    var pStyle = p.currentStyle || window.getComputedStyle(p);
    let marginStyle = parseFloat(pStyle["padding-left"], 10);
    marginWidth = (windowWidth - contentWidth) / 2 + marginStyle;
  }

  function resizePaddings() {
    grouping.style.right = `${marginWidth}px`;
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

    aboutBtn.addEventListener("click", function() {
window.location = "index.html#bio-cont"
  });

  workBtn.addEventListener("click", function() {
window.location = "index.html#work-cont"
  });

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    let toggleWidth = document.querySelector(".toggle").clientWidth;
    let groupingWidth = document.querySelector(".grouping").clientWidth;
console.log(toggleWidth);
let groupingRight = windowWidth/2 - toggleWidth/2;
grouping.style.right = `${groupingRight}px`;
}




