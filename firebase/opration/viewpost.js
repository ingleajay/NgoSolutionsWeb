var d =  new Date();
var t = d.getTime();
var counter = t;
document.getElementById('msForm').addEventListener('submit',(e)=>{
var  adminId = firebase.auth().currentUser.uid;
var Title  = document.getElementById('inputSuccess1').value;
var Description  = document.getElementById('inputSuccess2').value;
e.preventDefault();
createTask(task,description);
form.reset();
})
function createTask(taskName,description){
  console.log(counter);
  counter +=1;
  console.log(counter);
  var task={
    Title:taskName,
    id: counter,
    Description:description,
    adminId : firebase.auth().currentUser.uid,
    email : firebase.auth().currentUser.email,

  }
  // let db = firebase.database().ref("task/"+counter)
  // db.set(task);
  document.getElementById('cardsection').innerHTML="";
  readTask(adminId);
}
function readTask(adminId){
 
  var task = firebase.database().ref('/user/' + adminId +"/Posts/");
  task.on("child_added",function (data){
    var taskvalue = data.val();
    document.getElementById("cardsection").innerHTML+=`
    <div class="row">
    <div class="container-fluid " >
    
    <div class="card shadow " style="margin-bottom:20px; ">
  <div class="card-header" id="c_head" >
  <h5 class="card-title" style="text-align:center; id="c_title" ">${taskvalue.Title}</h5>
  </div>
  <div class="card-body" >
    <p class="card-title">${taskvalue.Description}</p>
    <a  href="#" data-toggle="modal" data-target="#editModal" >
    <button type="submit" class="btn btn-primary" id="button3" style="color:white;" 
    onclick="updatetask(${taskvalue.id},'${taskvalue.task}','${taskvalue.description}')">Edit</button></a>
    <button type="submit" class="btn btn-primary" id="button2"  onclick="deletetask(${taskvalue.id})">delete</button>
  </div>
  </div>
<div>
</div>
    `;
   
  });
  
//   document.getElementById("msApp").addEventListener('submit',(e)=>{
//     e.preventDefault();
//   })

// document.getElementById("AppToWeb").addEventListener('click',(e)=>{
//     app_update();
// });
// function app_update() {
// var userId = firebase.auth().currentUser.uid;

//  alert("Your permission is granted now !")   ;
    
// }

  

  var task1 = firebase.database().ref('/admin/' + adminId +"/user/");
  task1.on("child_added",function (data1){
    var taskvalue1 = data1.val();
   console.log(taskvalue1)
    document.getElementById("adminsection").innerHTML+=`
    <div class="row">
   <p style="color:white; margin-top:20px;">  ${taskvalue1.orgname}</p>
 </div>
    `;
  });
}

function deletetask(id){
  var  adminId = firebase.auth().currentUser.uid;
  let task= firebase.database().ref('/user/'+ adminId + "/Posts/"+id)
  task.remove();
  document.getElementById('cardsection').innerHTML="";
  readTask(adminId);
}

function updatetask(id,name,description){
  document.getElementById("firstsection").innerHTML=`
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
     
        <div class="modal-body">
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button> 
            <div class="container-fluid">
              <!-- Basic Card Example -->
              <div class="card shadow mb-4 ">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">EDIT POST</h6>
                </div>
                <div class="card-body">
                <form action="" method="POST" id="msform2" >

                      <div >

                          <div class="form-group">
                              <label class="font-weight-bold " > TITLE :</label>
                              <input type="text" name="title" class="form-control" placeholder="Title" id="inputSuccess1" required>
                              <div class="invalid-feedback">please enter Title</div>
                          </div>
                          <div class="form-group">
                              <label class="font-weight-bold " >DESCRIPTION :</label>
                              <textarea  name="Description" rows="10" class="form-control" placeholder="Description" id="inputSuccess2" required></textarea>
                              <div class="invalid-feedback">please enter description</div>
                            </div>
                            <div class="form-group">
                              <label class="font-weight-bold ">UPLOAD IMAGE :</label>
                              <input type="file" name="pic" class="form-control" accept="image/*" id="pic" required>
                              <div class="invalid-feedback">upload valid format images jpeg,jpg,png only.</div>
                          </div>
                        
                      </div>
                      <div>
                          <button type="submit" name="regbtn" class="btn btn-primary" id="button2" >UPDATE</button>
                      </div>
                  </form>
                </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
</div>`;
document.getElementById("msform2").addEventListener('submit',(e)=>{
  e.preventDefault();
})
document.getElementById("button2").addEventListener('click',(e)=>{
updatetask2(id,document.getElementById('inputSuccess1').value,document.getElementById('inputSuccess2').value
,document.getElementById('pic').value
);

})
// document.getElementById('inputSuccess1').value = name;
// document.getElementById('inputSuccess2').value = description;
}
function updatetask2(id,name,description,pic){
  var  adminId = firebase.auth().currentUser.uid; 
  var selectedFile;
  var pic1 = document.getElementById("pic"); 
  selectedFile = pic1.files[0]; 
 // select unique name for everytime when image uploaded 
          // Date.now() is function that give current timestamp 
  var name1="123"+Date.now(); 
         
          // make ref to your firebase storage and select images folder 
  var storageRef = firebase.storage().ref('/user/' + adminId +'/Posts/'+ name1); 
  
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
                  firebase.database().ref('/user/'+ adminId + '/Posts/'+ id).set({
                    Title:name,
                    Description:description, 
                    id : id,
                    adminId : firebase.auth().currentUser.uid,
                    email : firebase.auth().currentUser.email,
                    downloadURL : downloadURL,

    });
   
    }); 
  }); 
         
  alert("upload sucessfully.")

}
