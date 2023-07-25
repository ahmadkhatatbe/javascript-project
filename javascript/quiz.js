let startquiz = document.getElementById("btn-start");
let quizheader = document.getElementById("quiz-header");
let submit = document.getElementById("submit");
let selectelement = document.querySelectorAll(".answer");
let answers = document.getElementById("answers");
let namequ = document.getElementById("namequ");

let message = document.getElementById("message");

let userAnswers = [];
let arrdata = [];
let ht = ``;
let current = 0;
let rightanswer = 0;
let wronganswer = 0;
let flag=false;

let datatest=localStorage.getItem("user")
let gettest = JSON.parse(datatest);

///////////requestjson////////////////////
let xmldata = new XMLHttpRequest();

xmldata.onload = function () {
  
  arrdata = JSON.parse(this.responseText);
  

let len = arrdata.length;
  

 addqustion(arrdata[current], len);


  submit.onclick = () => {
    let rightanswer = arrdata[current].correct;

    flag=true

    current++;

    checkanswer(rightanswer, len);

    namequ.innerHTML = ``;
    answers.innerHTML = ``;

    addqustion(arrdata[current], len);

      window.sessionStorage.getItem("load")
   
  };
 
};



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

      answers.appendChild(input);

      answers.appendChild(label);
    }
  
  
  
  }   else if (current === count) {
    let finish = document.getElementById("finish");
    gettest[2]="0"
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
        current:current,
        valid:flag
    }

 userAnswers.push(answeredobj);

 localStorage.setItem("user_answer", JSON.stringify(userAnswers));
 

  
}
let chooseanswer;

function checkanswer(ranswer, count) {
  let answers = document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      chooseanswer = answers[i].dataset.answer;

    }else{
      console.log(current);
      message.innerHTML="Please choose the answer"
      
    } 
      
    }


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
