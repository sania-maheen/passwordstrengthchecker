let password = document.getElementById("password");
let strengthBar = document.getElementById("strength");
let message = document.getElementById("message");

password.addEventListener("input", function(){

let value = password.value;
let strength = 0;

if(value.length >= 8){
strength += 1;
}

if(/[A-Z]/.test(value)){
strength += 1;
}

if(/[0-9]/.test(value)){
strength += 1;
}

if(/[!@#$%^&*]/.test(value)){
strength += 1;
}


if(strength === 0){
strengthBar.style.width = "0%";
message.textContent = "";
}

if(strength === 1){
strengthBar.style.width = "25%";
strengthBar.style.background = "red";
message.textContent = "Weak password";
}

if(strength === 2){
strengthBar.style.width = "50%";
strengthBar.style.background = "orange";
message.textContent = "Medium password";
}

if(strength === 3){
strengthBar.style.width = "75%";
strengthBar.style.background = "blue";
message.textContent = "Strong password";
}

if(strength === 4){
strengthBar.style.width = "100%";
strengthBar.style.background = "green";
message.textContent = "Very strong password";
}

});