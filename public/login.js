(async () => {
    const userName = localStorage.getItem('user'); //if already logged in
    if (userName) { 
      document.querySelector('#username').textContent = userName;
      setDisplay('loginDialouge', 'none');
      setDisplay('authenticatedDialouge', 'block');
    } else {
      setDisplay('loginDialouge', 'block');
      setDisplay('authenticatedDialouge', 'none');
    }
})();



function loginUser(){
    loginOrCreate(`/api/auth/login`);
}

function createUser(){
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint){
    const name = document.querySelector("#name")?.value;
    const password = document.querySelector("#password")?.value;

    //gets the response object
    //the endpoint is the parameter
    const response = await fetch(endpoint, {
        method: 'post', //request method
        body: JSON.stringify({ username: name, password: password }), //req body
        headers: { // req header
          'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(response.ok){
        localStorage.setItem("user",name);
        window.location.href = "recipebook.html";
    }
    else{
        const body = await response.json();
        const errorEl = getErrorEl();
        errorEl.querySelector('#errorBody').textContent = `Error: ${body.msg}`;
        const main = document.getElementById("main");
        main.appendChild(errorEl);
    }
}

function getErrorEl(){
    const el = document.createElement('div');
    el.innerHTML  = `<div class="alert alert-primary  fade show" role="alert" id="errorDialouge">
                        <p id="errorBody"></p>
                    </div>`;
    return el;
}

function logout() {
    localStorage.removeItem('user');
    // fetch(`/api/auth/logout`, {
    //   method: 'delete',
    // }).then(() => (window.location.href = '/'));
    window.location.href = '/';
}

function recipeBook(){
    window.location.href = 'recipebook.html';
}

//used to modify HTML in index.html
function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
}