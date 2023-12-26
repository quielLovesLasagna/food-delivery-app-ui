"use strict";

// ELEMENT/S
const navigationEl = document.querySelector(".nav");
const headerEl = document.querySelector(".header");
const btnNavToggleEl = document.querySelector(".nav__toggle");
const yearEl = document.querySelector(".year");

// FUNCTION/S
/*
getYear() function dymanically gets the current year and updates the text content of the year element to the year that it derived
*/
function getYear() {
	const currentYear = new Date().getFullYear();
	yearEl.textContent = currentYear;
}
getYear();

// TODO: emplement sticky navigation
// const observer = new IntersectionObserver(
// 	function (entries) {
// 		const ent = entries[0];
// 		if (ent.isIntersecting) {
// 			navigationEl.style.position = "fixed";
// 		}
// 	},
// 	{
// 		root: null,
// 		rootMargin: "-80px",
// 		threshold: 0,
// 	}
// );
// observer.observe(headerEl);

// EVENT LISTENER/S
btnNavToggleEl.addEventListener("click", function () {
	/*
  This event handler toggles the "nav-open" class which basically show and hide the navigation in mobile view if user clicks the toggle button
  */
	navigationEl.classList.toggle("nav-open");
});
