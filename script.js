function sendemail () {
    
    alert("Your Email is successfully");
};

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


const form = document.querySelector("form");

function sendEmail() {
  Email.send({
    Host : "smtp.rumble.com",
    Username : "adilkhanaptech110@gmail.com",
    Password : "54F1DA7C76A428500E7E3728AD3B29B6D309",
    To : 'adilkhanaptech110@gmail.com',
    From : "adilkhanaptech110@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});