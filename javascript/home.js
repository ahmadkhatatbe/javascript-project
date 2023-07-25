let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let logout = document.getElementById("logout");
let welcome = document.getElementById("welcome");
let btn_start_home = document.getElementById("btn_start_home");

let arrtest=localStorage.getItem("user")
let arr = JSON.parse(arrtest);

let answer= localStorage.getItem("user_answer")
let user= localStorage.getItem("users")
let getuser=JSON.parse(user)


if(JSON.parse(localStorage.getItem("user"))[3]) {
    signin.style.display = "none"
    signup.style.display = "none";
    logout.style.display = "block";
    welcome.style.display = "block";
    welcome.innerText = `Welcome ${JSON.parse(localStorage.getItem("user"))[0]}`;


    if (arr[2]==="0") {
        btn_start_home.onclick = () => {
          location.href = "/Pages/home.html";
          alert("Quiz has been taken");
        };
    } else {
     btn_start_home.onclick = () => {
       location.href = "/Pages/quiz.html";
       
     };
    } 

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

