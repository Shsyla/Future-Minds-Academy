
const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsg = document.querySelector("#errorMsg");
const loginBtn = document.querySelector("#loginBtn");


loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    if (email.value == "info@futureminds.io" && password.value == "Fma#2025") {
        window.location.href = "dashboard.html"; 
    } 
    else {
        alert("Wrong Credentials");
    }
});