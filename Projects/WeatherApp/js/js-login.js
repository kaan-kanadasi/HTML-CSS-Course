if(localStorage.getItem('button') === 'clicked') {
    // to not display the content of the login page while the website is downloading
    document.body.style.display = 'none';
    // go to the next tab directly
    window.location.href = 'weather.html'
}

// same effect as | const buttonElem = document.querySelector('#js-login-button');
const buttonElem = document.getElementById('js-login-button'); 
buttonElem.addEventListener('click', function() {
    localStorage.setItem('button', 'clicked');

    // manipulates the browser history with another page - changes the history to weather.html
    history.replaceState(null, null, 'weather.html'); 
})