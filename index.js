const iconMenu = document.querySelector(".iconMenu");

const menuMobile = document.querySelector(".navMenu");

iconMenu.addEventListener("click", toggleMenuMobile);

function toggleMenuMobile() {
    console.log("esto esta escuchando el click")

    menuMobile.classList.toggle("inactive")
}

