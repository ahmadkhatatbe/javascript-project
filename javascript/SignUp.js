let sign_in_btn = document.getElementById("sign-in-btn");
let sign_up_btn = document.getElementById("sign-up-btn");
let container = document.getElementById("container");

//for responsive
let sign_in_btn2 = document.getElementById("sign-in-btn2");
let sign_up_btn2 = document.getElementById("sign-up-btn2");

// sign_up_btn.addEventListener ("click" , function(){
//     container.classList.add ("sign-up-mood");
// });

// sign_in_btn.addEventListener ("click" , function(){
//     container.classList.remove ("sign-up-mood");
// });

sign_up_btn.addEventListener("click", function () {
  container.setAttribute("id", "sign-up-mood");
});

sign_in_btn.addEventListener("click", function () {
  container.removeAttribute("id");
});

// for resposive
sign_up_btn2.addEventListener("click", function () {
  container.setAttribute("id", "sign-up-mood2");
});

sign_in_btn2.addEventListener("click", function () {
  container.removeAttribute("id");
});

/////////////////////////////////////////////////////////
//Regular Expression - Sign Up
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let userstatus = document.getElementById("userstatus");
let emailstatus = document.getElementById("emailstatus");
let passwordstatus = document.getElementById("passwordstatus");

username.addEventListener("keyup", function () {
  let regExpUser = /^[a-zA-Z0-9_]{3,20}$/;

  if (username.value.match(regExpUser)) {
    userstatus.innerHTML = `Username ${username.value} is valid`;
    userstatus.style.color = "green";
  } else {
    userstatus.innerHTML = `Username ${username.value} is not valid. It should contain at least 3 characters`;
    userstatus.style.color = "red";
  }
});

email.addEventListener("keyup", function () {
  let regExpEmail = /^[^0-9][^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.match(regExpEmail)) {
    emailstatus.innerHTML = `Email is valid`;
    emailstatus.style.color = "green";
  } else {
    emailstatus.innerHTML = `Email is not valid. It should be like (example123@example.com)`;
    emailstatus.style.color = "red";
  }
});

password.addEventListener("keyup", function () {
  let regExpPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password.value.match(regExpPass)) {
    passwordstatus.innerHTML = `Password is strong`;
    passwordstatus.style.color = "green";
  } else {
    passwordstatus.innerHTML = `Password is not strong. It should contain at least one uppercase, Lowercase Letters, digit, special character.`;
    passwordstatus.style.color = "red";
  }
});

//////////////////////////////////////////////////////////////
//save sign up in Local storage
// let  name =document.getElementById('username')
// let  mail =document.getElementById('mail')
//  let  pass =document.getElementById('pass')
let signUp = document.getElementById("sign-up");
let valid="1";
signUp.onclick = function () {
  if (
    document.getElementById("userstatus").style.color === "green" &&
    document.getElementById("emailstatus").style.color === "green" &&
    document.getElementById("passwordstatus").style.color === "green"
  ) {
    let savedData = [];
    let obj = {
      username: username.value,
      email: email.value,
      password: password.value,
      flag:valid
      
    };
    
   

    if (localStorage.users != null) {
      savedData = JSON.parse(localStorage.users);
    } else {
      savedData = [];
    }
    //edited
     
    savedData.push(obj);
    
    localStorage.setItem("users", JSON.stringify(savedData));
  } else {
    window.alert("registration unsuccess");
  }
};

// function checkLogin(emaillogin, passwordlogin) {
//   for (let i = 0; i < savedData.length; i++) {
//     if (
//       savedData[i].email === emaillogin &&
//       savedData[i].password === passwordlogin
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// function updateLoginResult(message, success) {
//   let loginResult = document.getElementById("login-result");
//   loginResult.textContent = message;
//   loginResult.style.color = success ? "green" : "red";
// }

let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  let emailInput = document.getElementById("emailinput");
  let passwordInput = document.getElementById("passwordinput");
  // let navBtn = document.getElementById ("navbarCollapse");
  let emaillogin = emailInput.value;
  let passwordlogin = passwordInput.value;

  //   if (!emaillogin || !passwordlogin) {
  //     updateLoginResult("Please fill your email and password", false);
  //     return;
  //   }
  if (localStorage.users != null) {
    let allUsers = JSON.parse(localStorage.users);
    let loggedInUser = null;
    for (let i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].email === emaillogin ||
        allUsers[i].username === emaillogin
      ) {
        loggedInUser = allUsers[i];
        break;
      }
    }
    if (loggedInUser !== null && loggedInUser.password === passwordlogin) {
      window.location.assign("/Pages/home.html");
      let user = [];
      user.push(loggedInUser.username);
      user.push(loggedInUser.email);
       user.push(loggedInUser.flag);
      user.push(true);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      window.alert("Invalid credentials, please try again.");
    }
  } else {
    window.alert("No registered users found.");
  }

  //   if (checkLogin(emaillogin, passwordlogin)) {
  //     updateLoginResult("Login successful!", true);
  //     location.href = "./home.html";
  //   } else {
  //     updateLoginResult("Invalid email or password. Please try again.", false);
  //   }
});
//////////////////////////////////////////////////////////////
