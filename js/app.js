(function () {

var loginForm = document.querySelector('#login-form');

//adicionar os names corretos aos inputs conforme o back quer
loginForm.addEventListener('submit', function(e) {
    console.log('login form submit');
    e.preventDefault();

    let formData = new FormData(loginForm);
    for (var [key, value] of formData.entries()) { 
        console.log(key, value);
      }

}, false)

    loginUser(formData)

})();

async function loginUser(query){
    console.log("loginUser()");
    const joke = await loginUserRequest(formData);

    jokeIcon.src = joke.result[0].icon_url;
    jokeText.innerText = joke.result[0].value;
    jokeContainer.setAttribute('style', 'opacity: 1.0');
}



async function getRandomJokeFromQuery(query){
    console.log("getRandomJokeFromQuery => query = ", query);
    try { 
        const response = await fetch(`${BASE_URL}search?query=${query}`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json();
    } catch (error) {
        console.log(error);
    } finally {

    }
}