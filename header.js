
let scrollHeight = $(this).scrollTop();

// let iH;


// function calculateHeights() {
//  document.querySelector(".top-cont").clientHeight;
// }

// function scrollanimations(){

// };




let trackers = document.querySelectorAll(".tracker");
let trackerTexts = document.querySelectorAll(".tracker-text");
let counter = 0;
let countCheck = true;
let stepCheck = true;
let countCheckMin = false;
let stepCheckMin = false;

trackers.forEach(function(tracker,i){
	tracker.addEventListener("click", function() {

        // document.querySelector(`#tracker-${i}`).scrollIntoView({
        //     behavior: 'smooth'
        // });

        const id = `tracker-${i}`;
        const yOffset = -100; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});

		// window.location = `#tracker-${i}`;
	})
})

$(window).scroll(function() {
	scrollHeight = $(this).scrollTop();


	trackerTexts.forEach(function(trackerText, i){
		let counterHeight = Math.floor($(trackerText).offset().top - 100);

		if (i == counter){
			if (scrollHeight > counterHeight){
				
				trackers.forEach(function(tracker, j){
					tracker.classList.remove("active");
				})
				if (stepCheck){
					countCheck = true;
				}
				if (countCheck){
					counter = counter + 1;
					if (counter > trackers.length - 1) {
						counter = trackers.length - 1;
					}
					countCheck = false;
				}
				if (stepCheckMin == false){
					stepCheckMin = true;
				}
				trackers[counter].classList.add("active");
			}
			if (scrollHeight < counterHeight){
				trackers.forEach(function(tracker, j){
					tracker.classList.remove("active");
				})
				if (stepCheckMin){
					countCheckMin = true;
				}
				if (countCheckMin){
					counter = counter - 1;
					if (counter < 0){
						counter = 0;
					}
					countCheckMin = false;
				}
				if (stepCheck == false){
					stepCheck = true;
				}
				trackers[counter].classList.add("active");
			}
		}


	})


});



