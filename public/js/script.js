
//LOGOUT FORM HANDLER START

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  }
  else {
    logoutVal();
  }

}

document.querySelector('#logout').addEventListener('click', logout);

//LOGOUT FORM HANDLER END

function logoutVal() {
  var logoutValModal = document.getElementById("logoutValModal");
  var logoutClose = document.getElementById("logoutClose");
  logoutValModal.style.display = 'block';

  logoutClose.onclick = function () { logoutValModal.style.display = "none" };

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
//LOGIN FORM HANDLER END

//SIGN UP SCRIPT START


async function signupFormHandler(event) {
  event.preventDefault();
  const first_name = document.querySelector('#first_name').value.trim();
  const last_name = document.querySelector('#last_name').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (first_name && last_name && email && password) {
    try {
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
      console.log('user created')
      window.location.replace('/profile')
    } catch (error) {
      console.log(error)
    }

  }
}
  //SIGNUP SCRIPT END

