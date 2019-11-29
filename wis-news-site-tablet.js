function openNavTablet() {
    document.getElementById('nav-overlay-tablet').style.display = "flex";
    document.getElementById('nav-overlay-tablet').style.width = "100vmin";
}
function closeNavTablet() {
    document.getElementById('nav-overlay-tablet').style.display = "none";
    document.getElementById('nav-overlay-tablet').style.width = "0vmin";
}
function colorChangeBurgersTablet() {
    document.getElementById('burgerTop').style.background = "#3B4259";
    document.getElementById('burgerMid').style.background = "#3B4259";
    document.getElementById('burgerBottom').style.background = "#3B4259";
    document.getElementById('openNavButton').style.background = "white";
}
function colorChangeBurgersReverseTablet() {
    document.getElementById('burgerTop').style.background = "white";
    document.getElementById('burgerMid').style.background = "white";
    document.getElementById('burgerBottom').style.background = "white";
    document.getElementById('openNavButton-tablet').style.background = "#3B4259";
}
