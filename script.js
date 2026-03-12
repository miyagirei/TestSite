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

        const buttons = document.querySelectorAll(".tab-btn");
        const contents = document.querySelectorAll(".tab-content");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                buttons.forEach(btn => btn.classList.remove("active"));
                contents.forEach(content => content.classList.remove("active"));

                button.classList.add("active");

                const tab = button.dataset.tab;
                document.getElementById(tab).classList.add("active");
            });
        });
    });


});