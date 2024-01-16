function login() {

    var username = document.querySelector('input[type = "text"]').value;
    var password = document.querySelector('input[type = "password"]').value;

    if (username === 'Pato' && password === '2024'){

        window.open('https://www.youtube.com/watch?v=47YjCYxQUZ4');
    }else {
        alert('Credenciais incorretas. Tente novamente!');

    }


}