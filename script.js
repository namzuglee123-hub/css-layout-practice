const cards = document.querySelectorAll(".card");
const count = document.querySelector("#count");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("selected");
        count.textContent = document.querySelectorAll(".card.selected").length
    });
});