import { loadPage } from "./home.js";
import { loadContact } from "./contact.js";
import { loadMenu } from "./menu.js";

function tabs() {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about");

    home.addEventListener("click", () => {
        loadPage();
    });

    menu.addEventListener("click", () => {
        loadMenu();
    });

    about.addEventListener("click", () => {
        loadContact();
    });
}

window.onload = () => {
    loadPage();
    tabs();
};