// DOM Elements

const openSidebar = document.getElementById("contact"),
  sidebar = document.getElementById("sidebar"),
  closeSidebar = document.getElementById("close-menu-toggle");


// toggle sidebar
openSidebar.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

closeSidebar.addEventListener("click", () => {
    sidebar.style.display = "none"
})