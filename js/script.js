const menuBurger = document.getElementById("burger")
const closeButton = document.getElementById("closex")
function openMenu(){
    menuBurger.classList.add("active")
    closeButton.classList.add("active")
}
function closeMenu(){
    menuBurger.classList.remove("active")
    closeButton.classList.remove("active")
}
