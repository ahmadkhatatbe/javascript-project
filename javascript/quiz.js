let startquiz = document.getElementById("btn-start");
let quizheader = document.getElementById("quiz-header");
let submit = document.getElementById("submit");
let selectelement = document.querySelectorAll(".answer");
let answers = document.getElementById("answers");
let namequ = document.getElementById("namequ");
let btnnext = document.getElementById("btn-next");
let pupmessage = document.querySelector(".message");
let quizcontainer= document.querySelector(".container");
let contentmessage = document.getElementById("contentmessage");
let notanswer = document.getElementById("message");

let userAnswers = [];
let arrdata = [];
let ht = ``;
let current = 0;
let rightanswer = 0;
let wronganswer = 0;
let flag = false;

let time = 20 * 60;

let datatest = localStorage.getItem("user");
let gettest = JSON.parse(datatest);
function updateCountdown() {
  // حساب الدقائق والثواني المتبقية
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // إضافة أصفار مُسبقًا للثواني إذا كانت أقل من 10
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // عرض الوقت المتبقي
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `${minutes}:${seconds}`;

  // إيقاف المؤقت عندما يصل الوقت إلى 0
  if (time <= 0) {
    clearInterval(countdownInterval);
    alert("انتهى الوقت!");
    location.href = "/Pages/result.html"; // يمكنك تغيير هذا لأي إجراء ترغب في تنفيذه بعد انتهاء الوقت
  }

  // تحديث الوقت بانتهاء كل ثانية
  time--;
}
///////////requestjson////////////////////
const countdownInterval = setInterval(updateCountdown, 1000);
let xmldata = new XMLHttpRequest();

xmldata.onload = function () {
  arrdata = JSON.parse(this.responseText);

  let len = arrdata.length;

  addqustion(arrdata[current], len);
  

  submit.onclick = () => {
    let rightanswer = arrdata[current].correct;

    flag = true;

    
if (current === len - 1) {
  clearInterval(countdownInterval);
}
    checkanswer(rightanswer, len);

    namequ.innerHTML = ``;
    answers.innerHTML = ``;

    addqustion(arrdata[current], len);
    // saveCurrentQuestionIndex();
    message(current)
  };
};


function message(current) {
  console.log(current);
  if (current == 4) {
submit.style.pointerEvents="none"
    contentmessage.innerHTML="IQ test"
    pupmessage.style.display="block"
quizcontainer.style.filter="blur(15px)" ;
    btnnext.onclick = () => {
       pupmessage.style.display = "none";
       quizcontainer.style.filter = "blur(0px)";
submit.style.pointerEvents = "auto";

    };
  }
  if (current == 9) {
    submit.style.pointerEvents = "none";
    contentmessage.innerHTML = "technical test";
    pupmessage.style.display = "block";
    quizcontainer.style.filter = "blur(15px)";
    btnnext.onclick = () => {
      pupmessage.style.display = "none";
      quizcontainer.style.filter = "blur(0px)";
      submit.style.pointerEvents = "auto";

    };
  }
}



function addqustion(obj, count) {
  if (current < count) {
    let divtitle = document.createElement("div");

    let titlequ = document.createElement("h2");

    quizheader.appendChild(divtitle);

    let titletxt = document.createTextNode(obj["question"]);

    titlequ.appendChild(titletxt);

    namequ.appendChild(titlequ);

    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");

      answers.className = "answer";

      let input = document.createElement("input");
      input.name = "question";
      input.type = "radio";

      input.id = `answer${i}`;

      input.dataset.answer = obj[`answer_${i}`];

      let label = document.createElement("label");

      label.htmlFor = `answer${i}`;

      let labeltxt = document.createTextNode(obj[`answer_${i}`]);

      label.appendChild(labeltxt);
answers.appendChild(div)
      div.appendChild(input);

      div.appendChild(label);
      answers.appendChild(div);

    }

  

  } else if (current === count) {
    let finish = document.getElementById("finish");
    gettest[2] = "0";
    let set = JSON.stringify(gettest);
    localStorage.setItem("user", set);
    let btnresutl = document.getElementById("btnresult");
    namequ.remove();
    answers.remove();
    submit.remove();
    btnresutl.style.display = "block";
    finish.style.display = "block";
    btnresutl.onclick = () => {
      location.href = "/Pages/result.html";
    };
  }

  answeredobj = {
    answer: chooseanswer,
    countright: rightanswer,
    countwrong: wronganswer,
    current: current,
    valid: flag,
  };

  userAnswers.push(answeredobj);

  localStorage.setItem("user_answer", JSON.stringify(userAnswers));
}
let chooseanswer;

function checkanswer(ranswer, count) {
  let answers = document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {

    if (answers[i].checked ) {
      chooseanswer = answers[i].dataset.answer;
      current++;
       notanswer.innerHTML = "";
      break;
    } else  {
      notanswer.innerHTML = "Please choose the answer";

      
    }
  }
  console.log(answers[1].checked);
////////////////////////////////////

 
//////////////////////////////////////

  if (ranswer === chooseanswer) {
    rightanswer++;
    console.log(rightanswer);
    console.log("goodanswer");
  } else {
    wronganswer++;

    console.log(wronganswer);
    console.log("badanswer");
  }
}


 
  





xmldata.open("GET", "/javascript/data.json");
xmldata.send();
