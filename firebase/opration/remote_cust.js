$(document).ready(function(){
    var current = 1,current_step,next_step,steps;
    steps = $("fieldset").length;
    $(".next").click(function(event) {
        // Fetch form to apply custom Bootstrap validation
        var form = $("#regiration_form")
        if (form[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.addClass('was-validated');
      
        $(".next").click(function(){
    
      current_step = $(this).parent();
      next_step = $(this).parent().next();
      next_step.show();
      current_step.hide();
      setProgressBar(++current);

    });
      // Change progress bar action
});
$(".previous").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().prev();
    next_step.show();
    current_step.hide();
    setProgressBar(--current);
  });
setProgressBar(current);
function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
      .css("width",percent+"%")
      .html(percent+"%");   
  }     
});
$("#btnsubmit").click(function(event) {
// Fetch form to apply custom Bootstrap validation
var form = $("#regiration_form")
if (form[0].checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
    }
    form.addClass('was-validated');
    // Perform ajax submit here...
});
var d =  new Date();
var t = d.getTime();
var reg = t;
reg +=1;
document.getElementById("reg").value = reg;
function check(val){
    var element=document.getElementById('donate');
    if(val=='Fund'||val=='Education' || val=='Gifts & Products'||
    val=='Health'|| val=='Food & drink'|| val=='Sports'|| val=='Technology & Electronics'|| val=='Shopping & Fashion')
      element.style.display='block';
    else  
      element.style.display='none';
}
$('#volun').change(function(){
    if($(this).val()=="Yes")
    {
    $("#volun1").show();
    }
    else
    {
    $("#volun1").hide(); 
    }
});

var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("date&time").value = dateTime;

function read(adminId){

    var task = firebase.database().ref('/admin/' + adminId +"/user/");
     task.on("child_added",function (data){
       var taskvalue = data.val();
       document.getElementById("adminsection").innerHTML+=`
       <div class="row">
      <p style="color:white; margin-top:20px;">  ${taskvalue.orgname}</p>
    </div>
       `;
     });
}
$(document).ready(function(){
 
    $('#dob').datepicker({
     format: "yy-mm-dd",
     
    });
   });
   $('.countrypicker').countrypicker();
   $(function(){
       var $select = $(".1-100");
       for (i=1;i<=100;i++){
           $select.append($('<option></option>').val(i).html(i))
       }
});

const Postform = document.querySelector('#regiration_form');
Postform.addEventListener('submit' , (e) =>{
 var  adminId = firebase.auth().currentUser.uid;
 e.preventDefault();
 var selectedGender;
document.getElementsByName("gender").forEach(function(elm) {
  if (elm.checked) {
    selectedGender = elm.value;
  }
})
var selectedmem;
document.getElementsByName("vol").forEach(function(elm) {
  if (elm.checked) {
    selectedmem = elm.value;
  }
})
var selectedvolun;
document.getElementsByName("volun").forEach(function(elm) {
  if (elm.checked) {
    selectedvolun = elm.value;
  }
})
var selectedvolunn;
document.getElementsByName("volunn").forEach(function(elmm) {
  if(elmm == " " || elmm == ""){
    selectedvolunn = "0";
  }
  else{
    selectedvolunn = elmm.value;
  }
})
var d =  new Date();
var t = d.getTime();
var counter = t;
counter +=1;
console.log(counter);
firebase.database().ref('/remote_admin/'+ adminId + '/customer/'+ counter).set({
                    fname:document.getElementById('fname').value,
                    lname:document.getElementById('lname').value,
                    c_email:document.getElementById('email').value,
                    adminId : firebase.auth().currentUser.uid,
                    email : firebase.auth().currentUser.email,
                    phone:document.getElementById('phone').value,
                    city:document.getElementById('city').value,
                    country:document.getElementById('country').value,
                    dob:document.getElementById('dob').value,
                    address: document.getElementById('address').value,
                    gender:selectedGender,
                    member:selectedmem,
                    volunteer:selectedvolun,
                    Money : document.getElementById('volun11').value,
                    cust_id:counter,
                    skill:document.getElementById('volun1').value,
                    info:document.getElementById('info').value,
                    donate:document.getElementById('donate1').value, 
                    donate_info:document.getElementById('donate').value, 
                    age:document.getElementById('age').value, 
                    reg_id:document.getElementById('reg').value,  
                    pincode:document.getElementById('pincode').value, 
                    Date_Time:document.getElementById('date&time').value,
                         
      

});
  alert("Register sucessfully.")
  // msForm.reset();
});
