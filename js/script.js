// script.js

// Array to hold user profiles
let users = [];

// Function to add a new user
function addUser(name, whatsapp, instagram) {
    const user = {
        name: name,
        whatsapp: whatsapp,
        instagram: instagram
    };
    users.push(user);
    displayUsers();
}

// Function to display users on the main page
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear existing users

    users.forEach((user, index) => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <a href="https://wa.me/${user.whatsapp}" target="_blank">Conectar por WhatsApp</a>
            <a href="${user.instagram}" target="_blank">Ver en Instagram</a>
        `;
        userList.appendChild(userItem);
    });
}

// Event listener for the add user form
document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const whatsapp = document.getElementById('userWhatsApp').value;
    const instagram = document.getElementById('userInstagram').value;

    addUser(name, whatsapp, instagram);

    // Clear the form
    this.reset();
});