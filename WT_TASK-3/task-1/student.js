document.getElementById("registrationForm").addEventListener("submit", function(event){

event.preventDefault();

document.querySelectorAll(".error").forEach(function(item){
item.innerHTML="";
});

document.getElementById("success").innerHTML="";

let valid=true;

let name=document.getElementById("name").value.trim();
let roll=document.getElementById("roll").value.trim();
let email=document.getElementById("email").value.trim();
let mobile=document.getElementById("mobile").value.trim();
let password=document.getElementById("password").value;
let confirmPassword=document.getElementById("confirmPassword").value;
let department=document.getElementById("department").value;
let dob=document.getElementById("dob").value;

let gender=document.querySelector('input[name="gender"]:checked');

if(name===""){
document.getElementById("nameError").innerHTML="Full Name is required";
valid=false;
}

let rollPattern=/^[A-Za-z0-9]+$/;

if(!rollPattern.test(roll)){
document.getElementById("rollError").innerHTML="Only letters and numbers allowed";
valid=false;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){
document.getElementById("emailError").innerHTML="Enter a valid Email";
valid=false;
}

let mobilePattern=/^[0-9]{10}$/;

if(!mobilePattern.test(mobile)){
document.getElementById("mobileError").innerHTML="Enter 10 digit Mobile Number";
valid=false;
}

if(password.length<8){
document.getElementById("passwordError").innerHTML="Password must be at least 8 characters";
valid=false;
}

if(password!==confirmPassword){
document.getElementById("confirmPasswordError").innerHTML="Passwords do not match";
valid=false;
}

if(gender==null){
document.getElementById("genderError").innerHTML="Select Gender";
valid=false;
}

if(department===""){
document.getElementById("departmentError").innerHTML="Select Department";
valid=false;
}

if(dob===""){
document.getElementById("dobError").innerHTML="Select Date of Birth";
valid=false;
}

if(valid){
document.getElementById("success").innerHTML="Registration Successful!";
}

});