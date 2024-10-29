function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.innerHTML = 
    `<h1>Contact Information</h1>
    <p>1234567890</p>
    <p>fakeemail@email.com</p>`;

}

export {loadContact};