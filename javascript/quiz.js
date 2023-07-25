let startquiz = document.getElementById("btn-start");
let quizheader = document.getElementById("quiz-header");
let submit = document.getElementById("submit");
let selectelement = document.querySelectorAll(".answer");
let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let answers = document.getElementById("answers");

let namequ = document.getElementById("namequ");

let userAnswers = [];
let arrdata = [];
let ht = ``;
let current = 0;
let rightanswer = 0;
let wronganswer = 0;
let re = 0;
///////////requestjson////////////////////
let xmldata = new XMLHttpRequest();

xmldata.onload = function () {
  arrdata = JSON.parse(this.responseText);
  

let len = arrdata.length;
  

 addqustion(arrdata[current], len);


  submit.onclick = () => {
    let rightanswer = arrdata[current].correct;

    re++;

    current++;

    checkanswer(rightanswer, len);

    namequ.innerHTML = ``;
    answers.innerHTML = ``;

    addqustion(arrdata[current], len);

     
  };
 


};



function addqustion(obj, count) {
  if(current<count){
    
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

    answers.appendChild(input);

    answers.appendChild(label);

  }}else if (current === count) {
    let finish = document.getElementById("finish");

    let btnresutl = document.getElementById("btnresult"); 
     namequ.remove();
     answers.remove();
     submit.remove();
     btnresutl.style.display = "block";
     finish.style.display = "block";
     btnresutl.onclick=()=>{
      location.href="/result.html"
     }
  }
  
}
let chooseanswer;

function checkanswer(ranswer, count) {
  let answers = document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      chooseanswer = answers[i].dataset.answer;
      
    } 
      
    }
 answeredobj = {
        answer: chooseanswer,
        countright: rightanswer,
        countwrong: wronganswer,
    }

userAnswers.push(answeredobj);

  localStorage.setItem("user_answer", JSON.stringify(userAnswers));
  console.log(chooseanswer);
  console.log(ranswer);

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





xmldata.open("GET", "data.json");
xmldata.send();
