var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+'  '+time;
document.getElementById("Start_Date").value = dateTime;


 function add_task(){
    New_event= document.getElementById("newevent");
    Description = document.getElementById("Description");
    Date_Time = document.getElementById("Start_Date");
    Start_Date = document.getElementById("Start_Date1");
    End_Date = document.getElementById("End_Date");
    // Color = document.getElementById("Color");


    if( New_event.value.length != 0 && Description.value.length != 0
    && Date_Time.value.length != 0   && Start_Date.value.length != 0  && End_Date.value.length != 0 
    ){
      var  adminId = firebase.auth().currentUser.uid;
      var key = firebase.database().ref().child('/Schedule/' + adminId +"/Unfinish_Task/").push().key;
      var task = {
        New_event: New_event.value,
        Description:Description.value,
        Date_Time: Date_Time.value,
        Start_Date:  Start_Date.value,
        End_Date: End_Date.value,
        // Color: Color.value,
        key: key
      };
      var updates = {};
      updates['/Schedule/' + adminId +"/Unfinish_Task/" + key] = task;
      firebase.database().ref().update(updates);
      alert("Add Task Sucessfully")
      create_unfinished_task(adminId);
    }
  }

  function create_unfinished_task(adminId){
    unfinished_task_container = document.getElementsByClassName("unfinish")[0];
    unfinished_task_container.innerHTML = "";
    task_array = [];
   
    firebase.database().ref('/Schedule/' + adminId +"/Unfinish_Task/").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      for(var i, i = 0; i < task_array.length; i++){
        task_date = task_array[i][0];
        task_key = task_array[i][5];
        task_title = task_array[i][3];
        task_desc = task_array[i][1];
        task_start = task_array[i][4];
        task_end = task_array[i][2];

       
        task_container = document.createElement("div");
        task_container.setAttribute("class", "card");
        task_container.setAttribute("data-key", task_key);

        // TASK DATA
        task_data = document.createElement('div');
        task_data.setAttribute('id', 'task_data');
        
        title = document.createElement('p');
        title.setAttribute('id', 'task_title');
        title.setAttribute('contenteditable', false);
        title.innerHTML = task_title;

        desc = document.createElement('p');
        desc.setAttribute('id', 'task_desc');
        desc.setAttribute('contenteditable', false);
        desc.innerHTML = task_desc;

        date = document.createElement('p');
        date.setAttribute('id', 'task_date');
        date.setAttribute('contenteditable', false);
        date.innerHTML = task_date;

        s_date = document.createElement('p');
        s_date.setAttribute('id', 'task_start');
        s_date.setAttribute('contenteditable', false);
        s_date.innerHTML = task_start;

        e_date = document.createElement('p');
        e_date.setAttribute('id', 'task_end');
        e_date.setAttribute('contenteditable', false);
        e_date.innerHTML = task_end;

        // TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('id', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this.parentElement)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fas fa-edit');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        unfinished_task_container.append(task_container);
        task_container.append(task_data);
        task_data.append(title);
        task_data.append(desc);
        task_data.append(date);
        task_data.append(s_date);
        task_data.append(e_date);

        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);
      }

    });
  }
  function task_delete(task){
    key = task.getAttribute("data-key");
    var  adminId = firebase.auth().currentUser.uid;
    task_to_remove = firebase.database().ref('/Schedule/' + adminId +"/Unfinish_Task/" + key);
    task_to_remove.remove();
    // remove from html view or whatevesss
    task.remove();
  }
  function task_edit(task, edit_button){
    edit_button.setAttribute("id", "task_edit_button_editing");
    edit_button.setAttribute("onclick", "finish_edit(this.parentElement.parentElement, this)");

    title = task.childNodes[0].childNodes[0];
    title.setAttribute("contenteditable", true);
    title.setAttribute("id", "title_editing");
    title.focus();

    desc = task.childNodes[0].childNodes[1];
    desc.setAttribute("contenteditable", true);
    desc.setAttribute("id", "desc_editing");
    desc.focus();

    date = task.childNodes[0].childNodes[2];
    date.setAttribute("contenteditable", true);
    date.setAttribute("id", "date_editing");

    s_date = task.childNodes[0].childNodes[3];
    s_date.setAttribute("contenteditable", true);
    s_date.setAttribute("id", "s_date_editing");

    e_date = task.childNodes[0].childNodes[4];
    e_date.setAttribute("contenteditable", true);
    e_date.setAttribute("id", "e_date_editing");

  }
  function finish_edit(task, edit_button){
    edit_button.setAttribute("id", "task_edit_button");
    edit_button.setAttribute("onclick", "task_edit(this.parentElement.parentElement, this)");

    title = task.childNodes[0].childNodes[0];
    title.setAttribute("contenteditable", false);
    title.setAttribute("id", "task_title");

    desc = task.childNodes[0].childNodes[1];
    desc.setAttribute("contenteditable", false);
    desc.setAttribute("id", "task_desc");

    date = task.childNodes[0].childNodes[2];
    date.setAttribute("contenteditable", false);
    date.setAttribute("id", "task_date");

    s_date = task.childNodes[0].childNodes[3];
    s_date.setAttribute("contenteditable", false);
    s_date.setAttribute("id", "task_start");

    e_date = task.childNodes[0].childNodes[4];
    e_date.setAttribute("contenteditable", false);
    e_date.setAttribute("id", "task_end");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var task_obj = {
      Date_Time: task.childNodes[0].childNodes[2].innerHTML,
      Description: task.childNodes[0].childNodes[1].innerHTML,
      New_event: task.childNodes[0].childNodes[0].innerHTML,
      Start_Date: task.childNodes[0].childNodes[3].innerHTML,
      End_Date: task.childNodes[0].childNodes[4].innerHTML,
      key: key
    };

    var updates = {};
    var  adminId = firebase.auth().currentUser.uid;
    updates['/Schedule/' + adminId +"/Unfinish_Task/" + key] = task_obj;
    firebase.database().ref().update(updates);

  }
  function create_finished_task(adminId){
  finished_task_container = document.getElementsByClassName("finish")[0];
    finished_task_container.innerHTML = "";
    finished_task_array = [];
    firebase.database().ref('/Schedule/' + adminId +"/finish_Task/").once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    finished_task_array.push(Object.values(childData));
  });
  for(var i, i = 0; i < finished_task_array.length; i++){
 
    task_date = finished_task_array[i][0];
    task_key = finished_task_array[i][5];
    task_title = finished_task_array[i][3];
    task_desc = finished_task_array[i][1];
    task_start = finished_task_array[i][4];
    task_end = finished_task_array[i][2];

    task_container = document.createElement("div");
    task_container.setAttribute("class", "card");
    task_container.setAttribute("data-key", task_key);

    // TASK DATA
    task_data = document.createElement('div');
    task_data.setAttribute('id', 'task_data');

    title = document.createElement('p');
    title.setAttribute('id', 'task_title');
    title.setAttribute('contenteditable', false);
    title.innerHTML = task_title;

    desc = document.createElement('p');
    desc.setAttribute('id', 'task_desc');
    desc.setAttribute('contenteditable', false);
    desc.innerHTML = task_desc;

    date = document.createElement('p');
    date.setAttribute('id', 'task_date');
    date.setAttribute('contenteditable', false);
    date.innerHTML = task_date;

    
    s_date = document.createElement('p');
    s_date.setAttribute('id', 'task_start');
    s_date.setAttribute('contenteditable', false);
    s_date.innerHTML = task_start;

    
    e_date = document.createElement('p');
    e_date.setAttribute('id', 'task_end');
    e_date.setAttribute('contenteditable', false);
    e_date.innerHTML = task_end;

    // TASK TOOLS
    task_tool = document.createElement('div');
    task_tool.setAttribute('id', 'task_tool');

    task_delete_button = document.createElement('button');
    task_delete_button.setAttribute('id', 'task_delete_button');
    task_delete_button.setAttribute('onclick', "task_finished_delete(this.parentElement.parentElement)");
    fa_delete = document.createElement('i');
    fa_delete.setAttribute('class', 'fa fa-trash');

    finished_task_container.append(task_container);
    task_container.append(task_data);
    task_data.append(title);
    task_data.append(desc);
    task_data.append(date);
    task_data.append(s_date);
    task_data.append(e_date);

    task_container.append(task_tool);
    task_tool.append(task_delete_button);
    task_delete_button.append(fa_delete);
  }

});
}
function task_finished_delete(task){
    key = task.getAttribute("data-key");
    console.log(key)
    var  adminId = firebase.auth().currentUser.uid;
    task_to_remove = firebase.database().ref('/Schedule/' + adminId +"/finish_Task/" + key);
    task_to_remove.remove();
    // remove from html view or whatevesss
    task.remove();

}
function task_done(task, task_tool){
    finished_task_container = document.getElementsByClassName("finish")[0];
    task.removeChild(task_tool);
    finished_task_container.append(task);
    var key = task.getAttribute("data-key");
    console.log(key)
    var task_obj = {
      Date_Time: task.childNodes[0].childNodes[2].innerHTML,
      Description: task.childNodes[0].childNodes[1].innerHTML,
      New_event: task.childNodes[0].childNodes[0].innerHTML,
      Start_Date: task.childNodes[0].childNodes[3].innerHTML,
      End_Date: task.childNodes[0].childNodes[4].innerHTML,
      key: key
     
    };

    var updates = {};
    var  adminId = firebase.auth().currentUser.uid;
    updates['/Schedule/' + adminId +"/finish_Task/" + key] = task_obj;
    firebase.database().ref().update(updates);
    // delete our task from unfinished
    task_delete(task);
    create_finished_task(adminId);

}

