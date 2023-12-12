// app.js

// Initialize Okta Auth SDK
const oktaConfig = {
  baseUrl: 'https://dev-42376659.okta.com',
  clientId: '0oadr9pzkz4qTmgJf5d7',
  redirectUri: 'https://hobbies.shashirautela.com/login/callback',
};

// Ensure OktaAuth is defined before using it
if (typeof OktaAuth !== 'undefined') {
  const oktaAuth = new OktaAuth(oktaConfig);

  // Define login function
  function login() {
    // Your login logic here
    console.log('Login function called');
  }

  // Define logout function
  function logout() {
    // Your logout logic here
    console.log('Logout function called');
  }
} else {
  console.error('OktaAuth is not defined. Make sure the Okta Auth SDK script is loaded.');
}
