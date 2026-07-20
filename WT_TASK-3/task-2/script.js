document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("subjectError").innerHTML="";
document.getElementById("messageError").innerHTML="";

let valid=true;

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let subject=document.getElementById("subject").value.trim();
let message=document.getElementById("message").value.trim();

if(name===""){
document.getElementById("nameError").innerHTML="Name cannot be empty";
valid=false;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){
document.getElementById("emailError").innerHTML="Enter a valid Email";
valid=false;
}

if(subject.length<5){
document.getElementById("subjectError").innerHTML="Subject must contain at least 5 characters";
valid=false;
}

if(message.length<20){
document.getElementById("messageError").innerHTML="Message must contain at least 20 characters";
valid=false;
}

if(valid){

alert("Message Sent Successfully");

document.getElementById("contactForm").reset();

}

});