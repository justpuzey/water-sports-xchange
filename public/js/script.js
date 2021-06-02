



//LOGOUT FORM HANDLER START

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
    //modal will appear here when logged out 

  } else{
    //if user is not logged in
    logoutPopup();
   
  }
}

document.querySelector('#logout').addEventListener('click', logout);

//LOGOUT FORM HANDLER END

//JS FOR LOGIN MODAL

var modal = document.getElementById("loginModal");
var loginBtn = document.getElementById("login");

var span = document.getElementsByClassName("close")[0];

loginBtn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}
//JS FOR LOGOUT MODAL
var logoutModal = document.getElementById("logoutModal")
var logoutBtn = document.getElementById("logout")
var logoutClose = document.getElementsByClassName("logoutClose")[0];
logoutBtn.onclick = function()
{
  logoutModal.style.display = "block";
}
logoutClose.onclick = function () {
 logoutModal.style.display = "none";
}

//LOGIN FORM HANDLER START 
async function loginFormHandler(event) {

  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      document.location.replace('/profile');
    }
    else {
      //want to prompt user to create an account here
      //I need to also think of how to validate the password 
      document.location.replace('/login');
    }
  }
}

document.querySelector('.loginForm').addEventListener('submit', loginFormHandler)
//LOGIN FORM HANDLER END

//SIGN UP SCRIPT START


async function signupFormHandler(event) {
  event.preventDefault();
  const first_name = document.querySelector('#first_name').value.trim();
  const last_name = document.querySelector('#last_name').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (first_name && last_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      document.location.replace('/profile')
    }
    else {
      console.log('User account not created :(')
    }
  }
}
  //SIGNUP SCRIPT END

