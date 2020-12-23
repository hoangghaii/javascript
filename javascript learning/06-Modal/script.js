"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnOpenModal.forEach((element) => {
	element.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
	// console.log(e.key);

	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
