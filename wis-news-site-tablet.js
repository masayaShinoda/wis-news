function openNavTablet() {
    document.getElementById('nav-overlay-tablet').style.display = "flex";
    document.getElementById('nav-overlay-tablet').style.width = "100vmin";
}
function closeNavTablet() {
    document.getElementById('nav-overlay-tablet').style.display = "none";
    document.getElementById('nav-overlay-tablet').style.width = "0vmin";
}
function colorChangeBurgersTablet() {
    document.getElementById('burgerTopTablet').style.background = "#3B4259";
    document.getElementById('burgerMidTablet').style.background = "#3B4259";
    document.getElementById('burgerBottomTablet').style.background = "#3B4259";
    document.getElementById('openNavButtonTablet').style.background = "white";
}
function colorChangeBurgersReverseTablet() {
    document.getElementById('burgerTopTablet').style.background = "white";
    document.getElementById('burgerMidTablet').style.background = "white";
    document.getElementById('burgerBottomTablet').style.background = "white";
    document.getElementById('openNavButtonTablet').style.background = "#3B4259";
}
