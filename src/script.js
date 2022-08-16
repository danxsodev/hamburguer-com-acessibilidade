function inicialize (onload) {
onScroll();
ScrollReveal();
}
window.addEventListener("load", inicialize);

/*FUNÇÃO QUE ADICIONA E REMOVE O MENU FIXO AO SCROLLAR*/
function onScroll() {
    const navigation = document.getElementById("navigation");
    
    if (window.scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}
window.addEventListener("scroll", onScroll);

/*FUNÇÃO QUE ABRE E FECHA O MENU*/
function menuExpanded() {
    const menuHamburguer = document.getElementById("menu-hamburguer");
    menuHamburguer.classList.toggle("menu-expanded");
    menuHamburguer.classList.toggle("active");
    
    if (menuHamburguer) {
        menuHamburguer.setAttribute("aria-label","abrir menu");
        menuHamburguer.setAttribute("aria-expanded","false");
    } else {
        menuHamburguer.setAttribute("aria-label","fechar menu");
        menuHamburguer.setAttribute("aria-expanded","true");
    }
}




