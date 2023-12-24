let modal = document.querySelector(".modal");
let navButton = document.querySelector(".nav-button");
let container = document.querySelectorAll(".container");
let x = document.querySelectorAll(".login_x");
let transition = document.querySelectorAll(".transition");
let register = document.querySelector(".register");
let login = document.querySelector(".login");
let burger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let sidebarX = document.querySelector(".sidebar_x");

navButton.addEventListener("click", (element)=>{
    element.preventDefault()
    modal.classList.toggle("modal_active");
    document.body.classList.toggle("body_active");
    container.forEach(containers => {
        containers.classList.toggle("container_active");
    });
})
x.forEach(x_tr => {
    x_tr.addEventListener("click", (element)=>{
        element.preventDefault()
        modal.classList.toggle("modal_active");
        document.body.classList.toggle("body_active");
        container.forEach(containers => {
            containers.classList.toggle("container_active");
        });
    })
});
transition.forEach(register_text => {
    register_text.addEventListener("click", ()=>{
        register.classList.toggle("register_active");
        login.classList.toggle("login_active");
    })
});
burger.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar_active");
})
sidebarX.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebar_active");
})