function queryDatabase(token) {
    firebase.database().ref('/user/'+ token + '/Posts/').once('value').then(function(snapshot) {
      
      var PostObject = snapshot.val();
      console.log(PostObject);
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
        $(col).addClass("col-lg-4");
        var image = document.createElement("img");
        image.src = currentObject.downloadURL;
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

    var task = firebase.database().ref('/admin/' + token +"/user/");
    task.on("child_added",function (data){
      var taskvalue = data.val();
      console.log(taskvalue)
      document.getElementById("adminsection").innerHTML+=`
      <div class="row">
          <p style="color:white; margin-top:20px;"> ${taskvalue.orgname}</p>
      </div>
      `;
    });
  }