const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
});
