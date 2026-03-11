window.addEventListener("DOMContentLoaded", () => {
    fetch("./header.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("header").innerHTML = data;

        const hambuger = document.getElementById("hamburger");
        const navMenu = document.getElementsById("nav-menu");

        hambuger.addEventListener("click" , () =>{
        navMenu.classList.toggle("active");  
    });
});


});