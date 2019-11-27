function openNav() {
    document.getElementById('nav-overlay').style.display = "flex";
    document.getElementById('nav-overlay').style.width = "100vmin";
}
function closeNav() {
    document.getElementById('nav-overlay').style.display = "none";
    document.getElementById('nav-overlay').style.width = "0vmin";
}
function colorChangeBurgers() {
    document.getElementById('burgerTop').style.background = "#3B4259";
    document.getElementById('burgerMid').style.background = "#3B4259";
    document.getElementById('burgerBottom').style.background = "#3B4259";
    document.getElementById('openNavButton').style.background = "white";
}
function colorChangeBurgersReverse() {
    document.getElementById('burgerTop').style.background = "white";
    document.getElementById('burgerMid').style.background = "white";
    document.getElementById('burgerBottom').style.background = "white";
    document.getElementById('openNavButton').style.background = "#3B4259";
}
