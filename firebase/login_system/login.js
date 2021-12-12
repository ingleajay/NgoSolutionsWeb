const loginform = document.querySelector('#myForm');
loginform.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginform['inputSuccess1'].value;
  const password = loginform['inputSuccess2'].value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorMessage = error.message;
    alert(errorMessage);

  });
});
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location.replace("../home.html");
  }
});