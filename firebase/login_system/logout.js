const logoutform = document.querySelector('#logform');
  logoutform.addEventListener('submit' , (e) =>{
    e.preventDefault();
      firebase.auth().signOut();
  });