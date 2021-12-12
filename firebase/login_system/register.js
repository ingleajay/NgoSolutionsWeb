var d = new Date();
var t = d.getTime();
var counter = t;
counter += 1;
console.log(counter);
const Regform = document.querySelector('#msform');
Regform.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = Regform['email'].value;
  const password = Regform['pwd'].value;
  const orgname = Regform['orgname'].value;
  const country = Regform['country'].value;
  const city = Regform['city'].value;
  const state = Regform['state'].value;
  const pincode = Regform['pincode'].value;
  const short = Regform['short'].value;
  const Address = Regform['Address'].value;
  const cause = Regform['cause'].value;
  const date_time = Regform['date_time'].value;
  const regno = Regform['regno'].value;
  const upi_id = Regform['upi_id'].value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (response) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/admin/' + userId + '/user/' + counter).set({
      orgname: orgname,
      country: country,
      city: city,
      upi_id: upi_id,
      state: state,
      pincode: pincode,
      short: short,
      Address: Address,
      cause: cause,
      id: counter,
      regno: regno,
      date_time: date_time,
      userId: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
    });

    // firebase.auth().signOut();


    const ref = firebase.storage().ref('/Profile/' + userId + '/userprofile/' + counter);
    const file = document.querySelector("#pic1").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        firebase.database().ref('/admin/' + userId + '/profile/').push({
          url: url,
          userId: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
        })
        console.log(url);
        //   document.querySelector("#image").src = url;
      })
      .catch(console.error);

    const ref1 = firebase.storage().ref('/Logo/' + userId + '/userlogo/' + counter);
    const file1 = document.querySelector("#pic2").files[0];
    const name1 = +new Date() + "-" + file1.name;
    const metadata1 = {
      contentType: file1.type
    };
    const task1 = ref1.child(name1).put(file1, metadata1);
    task1
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        firebase.database().ref('/admin/' + userId + '/logo/').push({
          url: url,
          userId: firebase.auth().currentUser.uid,
          email: firebase.auth().currentUser.email,
        })
        console.log(url);
        //   document.querySelector("#image").src = url;
      })
      .catch(console.error);

    //  alert("suceesfully Register !!")
    $('#loginmodal').modal('show');
    //  window.location.href="../index.html";
  });
});
