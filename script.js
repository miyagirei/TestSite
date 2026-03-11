window.addEventListener("DOMContentLoaded", () => {
    fetch("./header.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("header").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");

        hamburger.addEventListener("click" , () =>{
        navMenu.classList.toggle("active");  
    });
});


});