if(localStorage.getItem('button') === 'clicked') {
    // go to the next tab directly
    window.location.href = 'weather.html'
}

const buttonElem = document.getElementById('js-login-button');
buttonElem.addEventListener('click', function() {
    localStorage.setItem('button', 'clicked');

    // manipulates the browser history with another page - changes the history to weather.html
    history.replaceState(null, null, 'weather.html'); 
})