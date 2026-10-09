if (window.innerWidth <= 600) {
    document.body.classList.add("menu-collapsed");
}

const button = document.getElementById("menu-toggle");

button.addEventListener("click", () => {
    document.body.classList.toggle("menu-collapsed");
});
