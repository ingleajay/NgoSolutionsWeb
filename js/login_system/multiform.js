function validate1(val) {
    v1 = document.getElementById("orgname");
    v2 = document.getElementById("country");
    v3 = document.getElementById("city");
    v4 = document.getElementById("state");
    v5 = document.getElementById("pincode");
    v6 = document.getElementById("short");
    v7 = document.getElementById("Address");
    v8 = document.getElementById("cause");
    v9 = document.getElementById("upi_id");
    var numbers = /^[-+]?[0-9]+$/;
    flag1 = true; flag2 = true; flag3 = true; flag4 = true; flag5 = true; flag6 = true; flag7 = true; flag8 = true; flag9 = true;
    if(val>=1 || val==0) {
    if(v1.value == "") {
    v1.style.borderColor = "#ff1a1a";
    flag1 = false;
    }
    else {
    v1.style.borderColor = "#E8E8E8";
    flag1 = true;
    }
    }
    
    if(val>=2 || val==0) {
    if(v2.value == "") {
    v2.style.borderColor ="#ff1a1a";
    flag2 = false;
    }
    else {
    v2.style.borderColor = "#E8E8E8";
    flag2 = true;
    }
    }
    if(val>=3 || val==0) {
    if(v3.value == "") {
        v3.style.borderColor = "#ff1a1a";
        flag3 = false;
        }
    else {
        v3.style.borderColor = "#E8E8E8";
        flag3 = true;
        }
    }
    if(val>=4 || val==0) {
        if(v4.value == "") {
        v4.style.borderColor ="#ff1a1a";
        flag4 = false;
        }
        else {
        v4.style.borderColor = "#E8E8E8";
        flag4 = true;
        }
    }
    if(val>=5 || val==0) {
        if(v5.value == "" ) {
            v5.style.borderColor = "#ff1a1a";
            flag5 = false;
            }
            else if(!(numbers.test(v5.value))) {
                v5.style.borderColor = "#ff1a1a";
                flag1 =false;
            }
        else {
            v5.style.borderColor ="#E8E8E8";
            flag5 = true;
            }
    }
    if(val>=6 || val==0) {
        if(v6.value == "") {
        v6.style.borderColor ="#ff1a1a";
        flag6 = false;
        }
        else {
        v6.style.borderColor = "#E8E8E8";
        flag6 = true;
        }
    }
    if(val>=7 || val==0) {
        if(v7.value == "") {
        v7.style.borderColor ="#ff1a1a";
        flag7 = false;
        }
        else {
        v7.style.borderColor = "#E8E8E8";
        flag7 = true;
        }
    }
    if(val>=8 || val==0) {
        if(v8.value == "") {
        v8.style.borderColor ="#ff1a1a";
        flag2 = false;
        }
        else {
        v8.style.borderColor = "#E8E8E8";
        flag8 = true;
        }
    }
    if(val>=9 || val==0) {
        if(v9.value == "") {
        v9.style.borderColor = "#ff1a1a";
        flag9 = false;
        }
        else {
        v9.style.borderColor = "#E8E8E8";
        flag9 = true;
        }
        }
    flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8 && flag9
    
    return flag;
}
function validate2(val) {
    v1 = document.getElementById("email");
    v2 = document.getElementById("pwd");
    v3 = document.getElementById("cpwd");
   
    flag1 = true; flag2 = true; flag3 = true;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(val>=1 || val==0) {
    if(v1.value == "") {
    v1.style.borderColor = "#ff1a1a";
    flag1 = false;
    }
    else if(!(mailformat.test(v1.value))) {
    v1.style.borderColor = "#ff1a1a";
    flag1 =false;
    }
    else {
    v1.style.borderColor = "#E8E8E8	";
    flag1 = true;
    }
    }
    if(val>=2 || val==0) {
    if(v2.value == "") {
    v2.style.borderColor ="#ff1a1a";
    flag2 = false;
    }
    else if(!(passw.test(v2.value))) {
        v2.style.borderColor = "#ff1a1a";
        flag2 =false;
    }    
    else if(v2.value != v3.value) {
        v2.style.borderColor = "#ff1a1a";
        flag2 =false;
    }    
    else {
    v2.style.borderColor = "#E8E8E8		";
    flag2 = true;
    }
    }
    if(val>=3 || val==0) {
    if(v3.value == "") {
        v3.style.borderColor = "#ff1a1a";
        flag3 = false;
        }
    else if(v2.value != v3.value) {
            v3.style.borderColor = "#ff1a1a";
            flag3 =false;
        }  
    else {
        v3.style.borderColor = "#E8E8E8		";
        flag3 = true;
        }
    }
    flag = flag1 && flag2 && flag3 
    
    return flag;
}
function validate3(val) {
    v1 = document.getElementById("pic1");
    v2 = document.getElementById("pic2");
    flag1 = true; flag2 = true; 
    if(val>=1 || val==0) {
    if(v1.value == "") {
    v1.style.borderColor = "#ff1a1a";
    flag1 = false;
    }
    
    else {
    v1.style.borderColor = "#E8E8E8	";
    flag1 = true;
    }
    }
    if(val>=2 || val==0) {
    if(v2.value == "") {
    v2.style.borderColor ="#ff1a1a";
    flag2 = false;
    }
  
    else {
    v2.style.borderColor = "#E8E8E8	";
    flag2 = true;
    }
    }
    flag = flag1 && flag2 
    
    return flag;
}
function validate4(val) {
    v1 = document.getElementById("phone");
    var numbers = /^[-+]?[0-9]+$/;
    flag1 = true;

    if(val>=1 || val==0) {
    if(v1.value == "") {
    v1.style.borderColor = "#ff1a1a";
    flag1 = false;
    }
    else if(!(numbers.test(v1.value))) {
        v1.style.borderColor = "#ff1a1a";
        flag1 =false;
    }
    else {
    v1.style.borderColor = "#E8E8E8		";
    flag1 = true;
    }
    }
    flag = flag1 
    
    return flag;
}
$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    str1 = "next1";
    str2 = "next2";
    str3 = "next3";
    str4 = "next4";
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
        if(!str1.localeCompare($(this).attr('id')) && validate1(0) == true) {
            val1 = true;
            }
        else {
            val1 = false;
        }
            
        if(!str2.localeCompare($(this).attr('id')) && validate2(0) == true) {
            val2 = true;
            }
        else {
            val2 = false;
        }
        if(!str3.localeCompare($(this).attr('id')) && validate3(0) == true) {
            val3 = true;
            }
        else {
            val3 = false;
        }
        if(!str4.localeCompare($(this).attr('id')) && validate4(0) == true) {
            val4 = true;
            }
        else {
            val4 = false;
        }
        
  if((!str1.localeCompare($(this).attr('id')) && val1 == true) || (!str2.localeCompare($(this).attr('id')) && val2 == true)
  ||(!str3.localeCompare($(this).attr('id')) && val3 == true) || (!str4.localeCompare($(this).attr('id')) && val4 == true)) {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity:0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    }
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    });



  