const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
const navbarToggleBtn = document.querySelector(".navbar-toggle-btn ");
const sidebarContainer = document.querySelector(".sidebar-container");

navbarToggleBtn.addEventListener('click', function(){
    sidebarContainer.classList.toggle('active');
});

sidebarCloseBtn.addEventListener('click', function(){
    sidebarContainer.classList.toggle('active');
})