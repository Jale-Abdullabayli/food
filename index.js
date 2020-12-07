var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");
var Close = menu.children[0];
menuButton.addEventListener("click", OpenMenu);
Close.addEventListener("click", CloseMenu);
menu.children[1].addEventListener("click", GoFoods);
menu.children[1].addEventListener("click", CloseMenu);
menu.children[2].addEventListener("click", GoFoodMan);
menu.children[2].addEventListener("click", CloseMenu);

function GoFoods() {
    location.href = "#Foods";
}

function GoFoodMan() {
    location.href = "#FoodMan";
}

function OpenMenu() {
    menu.style.left = "0";
}

function CloseMenu() {
    menu.style.left = "-40%";
}