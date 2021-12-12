var d =  new Date();
var t = d.getTime();
var counter = t;
counter +=1;
console.log(counter);

const Contactform = document.querySelector('#msform');
   Contactform.addEventListener('submit' , (e) =>{
   e.preventDefault();
   const name = Contactform['name'].value;
   const email= Contactform['email'].value;
   const subject = Contactform['subject'].value;
   const message =Contactform['message'].value;

   firebase.database().ref('/contact/'+ counter).set({
    name:name,
    email:email,
    subject:subject,
    message:message,
         
    });
    alert("YOUR MESSAGE HAS BEEN SEND")
 });