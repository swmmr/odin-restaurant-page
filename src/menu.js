function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.innerHTML = 
    `<h1>Menu</h1>
    <p>food 1: 5$</p>
    <p>food 2: 10$</p>
    <p>food 3: 15$</p>
    <p>food 4: 20$</p>`;

}

export {loadMenu};