const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	const answer = accordion.querySelector(".answer");
	const icon = accordion.querySelector(".icon");
	accordion.addEventListener("click", () => {
		if (icon.classList.contains("active")) {
			icon.classList.remove("active");
			answer.style.maxHeight = null;
		} else {
			icon.classList.add("active");
			answer.style.maxHeight = answer.scrollHeight + "px";
		}
	});
});
