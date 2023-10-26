function initialize(){
    const headerMenuIcon = document.getElementById("header-menu-icon")
    headerMenuIcon.addEventListener("click", showSideMenu);
    const menuSideIcon = document.getElementById("menu-side-icon")
    menuSideIcon.addEventListener("click", hideSideMenu);
}

function showSideMenu(){
    const menuSide = document.getElementById("menu-side");
    menuSide.classList.add("side-menu-open");
    menuSide.classList.remove("side-menu-close");

}

function hideSideMenu(){
    const menuSide = document.getElementById("menu-side");
    menuSide.classList.add("side-menu-close");
    menuSide.classList.remove("side-menu-open");
}

initialize();  


//titulo descripcion autores agradecimientos  