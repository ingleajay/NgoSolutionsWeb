function read(adminId){
  var  adminId = firebase.auth().currentUser.uid;
  firebase.database().ref('/remote_admin/'+ adminId + '/customer/').on('value',function(snapshot){
    var table = document.getElementById('tablefilter');
    table.innerHTML = '';
    var data = snapshot.val();
    var con = 0;
    for (const key in data){
      table.innerHTML+=
      `
        <tr>
        
        <td>${con+1}</td>
        <td>${data[key].fname}</td>
        <td>${data[key].c_email}</td>
        <td>${data[key].age}</td>
        <td>${data[key].address}</td>
        <td>${data[key].phone}</td>
        <td>${data[key].country}</td>
        <td>${data[key].pincode}</td>
        </tr>
      
      `;
      con++;
    }
  });
  
  let filterInput = document.getElementById('filter');

  filterInput.addEventListener('keyup',function(){
    let filtervalue = document.getElementById('filter').value;
    var table = document.getElementById('tablefilter');
    let tr = table.querySelectorAll('tr');
   
    for(let index=0; index < tr.length; index++){
      let val0 = tr[index].getElementsByTagName('td')[0];
      let val1 = tr[index].getElementsByTagName('td')[1];
      let val2 = tr[index].getElementsByTagName('td')[2];
      let val3 = tr[index].getElementsByTagName('td')[3];
      let val4 = tr[index].getElementsByTagName('td')[4];
      let val5 = tr[index].getElementsByTagName('td')[5];
      let val6 = tr[index].getElementsByTagName('td')[6];
      let val7 = tr[index].getElementsByTagName('td')[7];
  
    if(val0.innerHTML.indexOf(filtervalue) > -1 || val1.innerHTML.indexOf(filtervalue) > -1   || val2.innerHTML.indexOf(filtervalue) > -1 ||
    val3.innerHTML.indexOf(filtervalue) > -1 || val4.innerHTML.indexOf(filtervalue) > -1 
    || val5.innerHTML.indexOf(filtervalue) > -1 || val6.innerHTML.indexOf(filtervalue) > -1
    || val7.innerHTML.indexOf(filtervalue) > -1){
      tr[index].style.display='';
    }
   
    else{
      tr[index].style.display ='none';
    }
    }
  })

  

  var task = firebase.database().ref('/admin/' + adminId +"/user/");
   task.on("child_added",function (data){
     var taskvalue = data.val();
     console.log(taskvalue);
     document.getElementById("adminsection").innerHTML+=`
     <div class="row">
    <p style="color:white; margin-top:20px;">  ${taskvalue.orgname}</p>
  </div>
     `;
   });
  }
  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('tablefilter');
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
      
    }
  }
  function sortnoTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('tablefilter');
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }