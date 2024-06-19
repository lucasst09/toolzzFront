function envidarDados() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        let message = document.getElementById('data');
        let corError = '#fa3e3e';
        let corSuccess = '#88baa3';

        if (data['errors']) {
            message.innerText = JSON.stringify(data['message'], null, 2);
            message.style.color = corError;

        } else {
            message.innerText = JSON.stringify(data['message'], null, 2);
            message.style.color = corSuccess;
        }
    })
    .catch(error => {
        console.error('Erro ao chamar a API:', error);
        message.innerText = 'Erro ao chamar a API';
        message.style.color = corError;
    });
}

let click = 1;
function nocturnal() {
    document.getElementById('container').style.backgroundColor = '#232323';
    document.getElementById('login-form-texto-1').style.color = '#f5f5f5';
    document.getElementById('login-form-texto-2').style.color = '#f5f5f5';
    document.getElementById('login-form-name').style.color = '#f5f5f5';
    document.getElementById('login-form-password').style.color = '#f5f5f5';
    document.getElementById('stay-connected-text').style.color = '#f5f5f5';
    document.getElementById('login-from-header-right-link').style.color = '#f5f5f5';
    if ((click % 2) == 0) {
        document.getElementById('container').style.backgroundColor = '#f5f5f5';
        document.getElementById('login-form-texto-1').style.color = '#232323';
        document.getElementById('login-form-texto-2').style.color = '#232323';
        document.getElementById('login-form-name').style.color = '#232323';
        document.getElementById('login-form-password').style.color = '#232323';
        document.getElementById('stay-connected-text').style.color = '#232323';
        document.getElementById('login-from-header-right-link').style.color = '#232323';

    }
    click ++;
}