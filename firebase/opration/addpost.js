var d =  new Date();
var t = d.getTime();
var counter = t;
const Postform = document.querySelector('#msForm');
Postform.addEventListener('submit' , (e) =>{
  e.preventDefault();
  counter +=1;
  var  adminId = firebase.auth().currentUser.uid;
  var selectedFile;
  var pic = document.getElementById("pic"); 
  selectedFile = pic.files[0]; 
  // select unique name for everytime when image uploaded 
  // Date.now() is function that give current timestamp 
  var name="123"+Date.now(); 
  // make ref to your firebase storage and select images folder 
  var storageRef = firebase.storage().ref('/user/' + adminId +'/Posts/'+ name); 
  // put file to firebase  
  var uploadTask = storageRef.put(selectedFile); 
  // all working for progress bar that in html 
  // to indicate image uploading... report 
  uploadTask.on('state_changed', function(snapshot){ 
  // var progress =  
  //  (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
  //   var uploader = document.getElementById('uploader'); 
  //   uploader.value=progress; 
        
  }, function(error) {console.log(error); 
 }, function() { 
        // get the uploaded image url back 
        uploadTask.snapshot.ref.getDownloadURL().then( 
            function(downloadURL) { 
                  firebase.database().ref('/user/'+ adminId + '/Posts/'+ counter).set({
                    Title:document.getElementById('inputSuccess1').value,
                    Description:document.getElementById('inputSuccess2').value, 
                    id : counter,
                    adminId : firebase.auth().currentUser.uid,
                    email : firebase.auth().currentUser.email,
                    downloadURL : downloadURL,

            });
           
              firebase.database().ref('/post_app/'+ counter).set({
                pTitle:document.getElementById('inputSuccess1').value,
                pDesec:document.getElementById('inputSuccess2').value, 
                pId : counter,
                adminId: firebase.auth().currentUser.uid,
                uEmail: firebase.auth().currentUser.email,
                pImage: downloadURL,
                pLikes:"0",
                pTime:counter,
            });
            
            
            // You get your url from here 
            console.log('File available at', downloadURL); 
            // print the image url  
            console.log(downloadURL); 
            }); 
    }); 
         
// const ref = firebase.storage().ref('Posts');
//       const file = document.querySelector("#pic").files[0];
//       const name = +new Date() + "-" + file.name;
//       const metadata = {
//         contentType: file.type
//       };
//       const task = ref.child(name).put(file, metadata);
//       task
//         .then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {
//           console.log(url);
//           // document.querySelector("#image").src = url;
//         })
//         .catch(console.error);

  alert("Post sucessfully.")
  // msForm.reset();
});



