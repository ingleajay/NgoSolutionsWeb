const forgotform = document.querySelector('#myForm');
forgotform.addEventListener('submit' , (e) =>{
  e.preventDefault();
  const emailAddress = forgotform['inputSuccess1'].value;
  var auth = firebase.auth();
  auth.sendPasswordResetEmail(emailAddress).then(function() {
        alert("Email has been sent to you please check it."); 
  }).catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
  });    
});