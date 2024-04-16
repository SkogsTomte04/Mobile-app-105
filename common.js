function $(x){
    return document.getElementById(x);
}

function toggleMenu(){
    let menu = $("menu");
    let modal = $("modal")
    menu.classList.toggle("active");
    modal.classList.toggle("active")
}