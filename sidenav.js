let isMenuOpen = false; 
const sideNav = document.querySelector("#sidenav"); 
sideNav.className = "nav-closed";

function toggleMenu() {
    isMenuOpen = !isMenuOpen
    sideNav.className = isMenuOpen ? "nav-open" : "nav-closed"
}