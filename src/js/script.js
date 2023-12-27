"use strict";

// ELEMENT/S
const navigationEl = document.querySelector(".nav");
const headerEl = document.querySelector(".header");
const btnNavToggleEl = document.querySelector(".nav__toggle");
const yearEl = document.querySelector(".year");
const allLinks = document.querySelectorAll("a:link");

// FUNCTION/S
/*
getYear() function dymanically gets the current year and updates the text content of the year element to the year that it derived
*/
function getYear() {
	const currentYear = new Date().getFullYear();
	yearEl.textContent = currentYear;
}
getYear();

// Smooth scrolling
allLinks.forEach((link) =>
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const href = link.getAttribute("href");

		// Scroll to top
		if (href === "#" || href === "#home") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}

		// Scrolling to specific parts of the page
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({
				behavior: "smooth",
			});
		}

		// Close mobile navigation
		if (link.classList.contains("nav__link")) {
			navigationEl.classList.toggle("nav-open");
		}
	})
);

// For sticky navigation
const observer = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (!ent.isIntersecting) {
			document.body.classList.add("sticky");
		}

		if (ent.isIntersecting) {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
	}
);
observer.observe(headerEl);

// EVENT LISTENER/S
btnNavToggleEl.addEventListener("click", function () {
	/*
  This event handler toggles the "nav-open" class which basically show and hide the navigation in mobile view if user clicks the toggle button
  */
	navigationEl.classList.toggle("nav-open");
});
