
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Armazenando os dados no localStorage
    const user = {
        name: name,
        email: email
    };
    localStorage.setItem('user', JSON.stringify(user));

    // Exibindo os dados armazenados
    displayUserData();
});

function displayUserData() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        document.getElementById('displayName').textContent = user.name;
        document.getElementById('displayEmail').textContent = user.email;
    }
}

// Exibe os dados armazenados ao carregar a página
displayUserData();