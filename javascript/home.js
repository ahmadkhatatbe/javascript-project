let signin = document.getElementById("Signin");
let signup = document.getElementById("Signup");
let logout = document.getElementById("logout");
let welcome = document.getElementById("welcome");
console.log(welcome);
let btn_start_home = document.getElementById("btn_start_home");

let arrtest = localStorage.getItem("user");
let arr = JSON.parse(arrtest);

let answer = localStorage.getItem("user_answer");
let user = localStorage.getItem("users");
let getuser = JSON.parse(user);

if (JSON.parse(localStorage.getItem("user"))[3]) {
  signin.style.display = "none";
  signup.style.display = "none";
  btn_get_home.style.display="none"
  logout.style.display = "block";
  welcome.style.display = "block";
  welcome.innerText = `Welcome ${JSON.parse(localStorage.getItem("user"))[0]}`;
welcome.style.color="white"
  if (arr[2] === "0") {
    btn_start_home.onclick = () => {
      location.assign = "/Pages/home.html";
      alert("Quiz has been taken");
    };
  } else {
    btn_start_home.onclick = () => {
      window.location.href = "/Pages/quiz.html";
    };
  }
} else {
  signin.style.display = "block";
  signup.style.display = "block";
  logout.style.display = "none";
  welcome.style.display = "none";
  btn_start_home.remove();
  btn_get_home.style.display = "block";
  btn_get_home.onclick = () => {
    location.href = "/Pages/SignUp.html";
  };
}

logout.addEventListener("click", function () {
  localStorage.setItem("user", JSON.stringify(["", false]));
  window.location.href("/Pages/SignUp.html");
  // console.log(JSON.parse(localStorage.getItem("user"))[1]);
});

signin.addEventListener("click", function () {
  window.location.href("../Pages/SignUp.html");
});

signup.addEventListener("click", function () {
  window.location.href("../Pages/SignUp.html");
});
