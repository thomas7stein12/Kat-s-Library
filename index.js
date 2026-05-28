function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.querySelectorAll(".menu_link").forEach(link => {
    link.addEventListener("click", closeMenu);
});