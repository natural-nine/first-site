const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSumit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Good To See You, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSumit);
} else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Good To See You, ${saveUserName}`;
}


