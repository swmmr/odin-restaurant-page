function loadPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.innerHTML = 
    `<h1>This is the restaurant homepage</h1>
    <p>This restaurant is super duper good. There won't be any pictures but trust!</p>`;

}

export {loadPage};