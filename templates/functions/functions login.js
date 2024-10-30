document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Mario' && password === '0000') {
            window.location.href = 'pages/mario/';
        } else if (username === 'Luigi' && password === '1111') {
            window.location.href = 'pages/luigi/';
        } else {
            alert('Invalid credentials');
        }
    });
});