const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}



let checkmenu = document.querySelectorAll('.menu__check-box');
let navlist = document.querySelectorAll('.header__nav');

checkmenu.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        navlist[index].classList.toggle('header__nav--active');
        document.body.classList.toggle('locked');
    });
})