let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let logout = document.getElementById("logout");
let welcome = document.getElementById("welcome");
let btn = document.getElementById("btn");

if(JSON.parse(localStorage.getItem("user"))[1]) {
    signin.style.display = "none"
    signup.style.display = "none";
    logout.style.display = "block";
    welcome.style.display = "block";
    welcome.innerText = `Welcome ${JSON.parse(localStorage.getItem("user"))[0]}`;
} else {
    signin.style.display = "block";
    signup.style.display = "block";
    logout.style.display = "none";
    welcome.style.display = "none";
}

logout.addEventListener("click", function () {
localStorage.setItem("user", JSON.stringify(["", false]));
window.location.assign("../Pages/SignUp.html")
    // console.log(JSON.parse(localStorage.getItem("user"))[1]);
})

signin.addEventListener ("click", function (){
    window.location.assign ("../pages/SignUp.html")
})

signup.addEventListener("click", function () {
  window.location.assign("../pages/SignUp.html");
});
btn.onclick=()=>{
    location.href = "../pages/quiz.html";
}
console.log(btn);