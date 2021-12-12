function readTask(adminId)  {
    var  adminId = firebase.auth().currentUser.uid;
  
    
    var task = firebase.database().ref('/admin/'+ adminId +'/user/');
      task.on("child_added",function (data){
        var taskvalue = data.val();
        document.getElementById("cardsection").innerHTML+=`
        <div class="row">
      <div class="container-fluid">
      <div class="d-sm-flex  mb-4">
                <h1 class="h3 mb-0 text-gray-800"></h1>
                  <form action="" method="POST" id="msApp" >
                      <button class="d-none d-sm-inline-block btn btn-md btn-success  " id="AppToWeb">Permission to Integrate with NGO App</button>
                  </form>
                </div>
      <div class="row">
              <div class="col-lg-3">
                
              <div class="card  shadow">
                    <div class="card-body" id="contentHolder"></div>   
              </div>
              <form action="" method="POST" id="imgform" >
              <input type="file" name="pic" class="form-control" accept="image/*" id="pic" required>
              <button type="submit" name="imgupdatebtn" class="btn btn-primary btn-block" style="margin-top:10px;" id="imgupdate" > Edit
              </button>
              </form> 
              </div>

              <div class="col-lg-7">
                  <!-- Basic Card Example -->
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Profile</h6>
                    </div>
                    <div class="card-body">
                    <form action="" method="POST" id="msform" >
                    <div class="row"> 
                      <div class="col-sm-3 col-md-3 col-xs-12">  
                          <div class="form-group">  
                            <label for="reg" style="margin-top:10px;">Registration No </label>       
                          </div> 
                      </div> 
                      <div class="col-sm-4 col-md-4 col-xs-12">  
                          <div class="form-group">                           
                            <input type="text"  class="form-control para" id="reg" name="reg" value="${taskvalue.regno}" disabled />  
                          </div> 
                      </div>
                  </div>
                  <div class="row"> 
                  <div class="col-sm-3 col-md-3 col-xs-12">  
                      <div class="form-group">  
                        <label for="date_time" style="margin-top:10px;">Date & Time </label>       
                      </div> 
                  </div> 
                  <div class="col-sm-4 col-md-4 col-xs-12">  
                      <div class="form-group">                           
                        <input type="text"  class="form-control para" id="date_time" name="date_time" value="${taskvalue.date_time}" disabled />  
                      </div> 
                  </div>
              </div>
                    <div class="row"> 
                      <div class="col-sm-3 col-md-3 col-xs-12">  
                          <div class="form-group">  
                            <label for="orgname" style="margin-top:10px;"> Organization Name :</label>       
                          </div> 
                      </div> 
                      <div class="col-sm-4 col-md-4 col-xs-12">  
                          <div class="form-group">                           
                            <input type="text"  class="form-control para" id="orgname" name="orgname" value="${taskvalue.orgname}" />  
                          </div> 
                      </div>
                  </div> 
                  <div class="row"> 
                    <div class="col-sm-3 col-md-3 col-xs-12">  
                        <div class="form-group">  
                          <label for="shortdesc" style="margin-top:10px;"> Short Decription :</label>       
                        </div> 
                    </div> 
                    <div class="col-sm-12 col-md-12 col-xs-12">  
                        <div class="form-group">                           
                        <textarea class="form-control para" name="short" rows="3" id="short">${taskvalue.short}</textarea>  
                        </div> 
                    </div>
                  </div>
                  <div class="row"> 
                    <div class="col-sm-3 col-md-3 col-xs-12">  
                        <div class="form-group">  
                          <label for="cause" style="margin-top:10px;"> Cause :</label>       
                        </div> 
                    </div> 
                    <div class="col-sm-12 col-md-12 col-xs-12">  
                        <div class="form-group">                           
                        <textarea class="form-control para" name="cause" rows="3" id="cause" >${taskvalue.cause}</textarea>    
                        </div> 
                    </div>
                  </div> 
                  <div class="row"> 
                  <div class="col-sm-3 col-md-3 col-xs-12">  
                      <div class="form-group">  
                        <label for="Address" style="margin-top:10px;"> Address :</label>       
                      </div> 
                  </div> 
                  <div class="col-sm-12 col-md-12 col-xs-12">  
                      <div class="form-group">                           
                      <textarea class="form-control para" name="Address" rows="3" id="Address" >${taskvalue.Address}</textarea>    
                      </div> 
                  </div>
                </div>
                <div class="row"> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">  
                      <label for="city" style="margin-top:10px;"> City :</label>       
                    </div> 
                </div> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">                           
                      <input type="text"  class="form-control para" id="city" name="city" value=" ${taskvalue.city}" />  
                    </div> 
                </div>
            </div> 
            <div class="row"> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">  
                      <label for="country" style="margin-top:10px;"> Country :</label>       
                    </div> 
                </div> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">                           
                      <input type="text"  class="form-control para" id="country" name="country" value="${taskvalue.country}" />  
                    </div> 
                </div>
            </div>
            <div class="row"> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">  
                      <label for="state" style="margin-top:10px;"> State :</label>       
                    </div> 
                </div> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">                           
                      <input type="text"  class="form-control para" id="state" name="state" value="${taskvalue.state}" />  
                    </div> 
                </div>
            </div>
            <div class="row"> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">  
                      <label for="pincode" style="margin-top:10px;"> Pincode :</label>       
                    </div> 
                </div> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">                           
                      <input type="text"  class="form-control para" id="pincode" name="pincode" value="${taskvalue.pincode}" />  
                    </div> 
                </div>
            </div>
            <div class="row"> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">  
                      <label for="pincode" style="margin-top:10px;"> UPI Id :</label>       
                    </div> 
                </div> 
                <div class="col-sm-3 col-md-3 col-xs-12">  
                    <div class="form-group">                           
                      <input type="text"  class="form-control para" id="upi_id" name="upi_id" value="${taskvalue.upi_id}" />  
                    </div> 
                </div>
            </div>
            <p class="para" id="email" name="email"><label id="lab" > Email :</label>  ${taskvalue.email}</p>
            <button type="submit" name="updatebtn" class="btn btn-primary" id="update" >Save</button>
            </form>
        </div>
    </div>
    </div>
    </div>
    </div>
       </div>       
     `;
     
     document.getElementById("msApp").addEventListener('submit',(e)=>{
      e.preventDefault();
    })
 
    document.getElementById("AppToWeb").addEventListener('click',(e)=>{
      app_update();
    });
    function app_update() {
        var orgname = document.getElementById('orgname').value;
        var address = document.getElementById('Address').value;
        var shortdesc = document.getElementById('short').value;
        var cause = document.getElementById('cause').value;
        var city =  document.getElementById('city').value;
        var country = document.getElementById('country').value;
        var state = document.getElementById('state').value;
        var pincode = document.getElementById('pincode').value;
        var upi_id = document.getElementById('upi_id').value;
        var nFollow = "0";
        

        console.log(orgname,Address,short,cause,city,country,state,pincode,upi_id);
          firebase.database().ref('/Web_admin/'+ adminId ).set({
                 orgname:orgname,
                 nFollow:nFollow,
                 country:country,
                 city:city,
                 state:state,
                 pincode:pincode,
                 upi_id:upi_id,
                 shortdesc:shortdesc,
                 address:address,
                 cause:cause,
                 userId : firebase.auth().currentUser.uid,
                 email : firebase.auth().currentUser.email,       
          }); 
       alert("Your permission is granted now ! ")   ;
      
  }
    //  <input type="submit" name="submit" class="submit btn btn-primary" value="Save" />
    document.getElementById("msform").addEventListener('submit',(e)=>{
      e.preventDefault();
    })
 

    document.getElementById("update").addEventListener('click',(e)=>{
      updatetask(
        document.getElementById('reg').value,
        document.getElementById('date_time').value,
        document.getElementById('orgname').value,
        document.getElementById('Address').value,
        document.getElementById('short').value,
        document.getElementById('cause').value,
        document.getElementById('city').value,
        document.getElementById('country').value,
        document.getElementById('state').value,
        document.getElementById('pincode').value,
        document.getElementById('upi_id').value,
        
        

    );
  })

  function updatetask(regno, date_time ,orgname,Address,short,cause,city,country,state,pincode){
    var  adminId = firebase.auth().currentUser.uid; 
    firebase.database().ref('/admin/'+ adminId +'/user/').once('value').then(function(snapshot) {
    var PostObject = snapshot.val();
    var keys = Object.keys(PostObject);
    firebase.database().ref('/admin/'+ adminId +'/user/'+keys).set({
           regno:regno,
           date_time:date_time,
           orgname:orgname,
           country:country,
           city:city,
           state:state,
           pincode:pincode,
           short:short,
           Address:Address,
           cause:cause,
           id:keys,
           userId : firebase.auth().currentUser.uid,
           email : firebase.auth().currentUser.email,       
    }); 
  });        
    alert("Save Sucessfully")
  
  }

  document.getElementById("imgform").addEventListener('submit',(e)=>{
    e.preventDefault();
  })

  document.getElementById("imgupdate").addEventListener('click',(e)=>{
    img_update();
  });
function img_update(){
  
  var  userId = firebase.auth().currentUser.uid; 
  var selectedFile;
  var pic1 = document.getElementById("pic"); 
  selectedFile = pic1.files[0]; 

  var name1="123"+Date.now(); 
 
  var storageRef = firebase.storage().ref('/Profile/'+ userId + '/userprofile/'+ name1); 
  
  var uploadTask = storageRef.put(selectedFile); 

  uploadTask.on('state_changed', function(snapshot){ 
    
        
  }, function(error) {console.log(error); 
  }, function() { 

    uploadTask.snapshot.ref.getDownloadURL().then( 
                function(url) { 
                  firebase.database().ref('/admin/'+ userId +'/profile/').once('value').then(function(snapshot) {
                  var PostObject = snapshot.val();
                  var keys = Object.keys(PostObject);
                  firebase.database().ref('/admin/'+ userId +'/profile/'+ keys).set({
                    url:url,
                    userId : firebase.auth().currentUser.uid,
                  email : firebase.auth().currentUser.email,
          })
        }); 
    }); 
  }); 
alert("Image Upload Sucessfully.")
}

    firebase.database().ref('/admin/'+ adminId + '/profile/').once('value').then(function(snapshot) {
      var PostObject = snapshot.val();
        var keys = Object.keys(PostObject);
        var currentRow;
        for (var i = 0; i< keys.length; i++) {
          var currentObject = PostObject[keys[i]];
          if (i % 3 == 0) {
            currentRow = document.createElement("div");
            $(currentRow).addClass("row");
            $("#contentHolder").append(currentRow);
          }
          var col = document.createElement("div");
          $(col).addClass("col-lg-2");
          var image = document.createElement("img");
          image.src = currentObject.url;
          $(image).addClass("contentImage");
          var p = document.createElement("p");
          $(p).html(currentObject.caption);
          $(p).addClass("contentCaption");
          $(col).append(image);
          $(col).append(p);
          $(currentRow).append(col);
          //create new row on every third entry
          //col-lg-4
        }
        
      }); 
      
    });

   
  var task1 = firebase.database().ref('/admin/' + adminId +"/user/");
   task1.on("child_added",function (data1){
     var taskvalue1 = data1.val();
    
     document.getElementById("adminsection").innerHTML+=`
     <div class="row">
    <p style="color:white; margin-top:20px;">  ${taskvalue1.orgname}</p>
  </div>
     `;
   });
    
  }
 
