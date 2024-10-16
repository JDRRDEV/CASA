function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'jdrr' && password === 'jd0208rr') {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
