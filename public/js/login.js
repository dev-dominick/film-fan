const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) { console.log(username)
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const createAccountFormHandler = async (event) => {
  event.preventDefault();

  document.location.replace('/signup');

};

document
  .querySelector('.login-form')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.create-form')
  .addEventListener('click', createAccountFormHandler);


