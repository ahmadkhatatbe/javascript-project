const btnResult = document.getElementById("btnResult");

let table = "";

const x = new XMLHttpRequest();

// console.log(x);

const tbody = document.getElementById("todo");
x.onload = function () {
  const json = JSON.parse(x.responseText);

  let gg;
  let arr = localStorage.getItem("user_answer");
  gg = JSON.parse(arr);
const first = gg.shift();
  for (let i = 0; i < json.length; i++) {
    const rivewHeader = document.createElement("div");
    rivewHeader.classList = "rivew-header";

    const rivewQuiz = document.createElement("h2");
    rivewHeader.appendChild(rivewQuiz);
    rivewQuiz.textContent = `${json[i].question}`;

    const rivewUl = document.createElement("ul");
    rivewHeader.appendChild(rivewUl);

    const rivewli = document.createElement("li");
    rivewUl.appendChild(rivewli);

    const rivewPar = document.createElement("p");
    rivewli.appendChild(rivewPar);
    rivewPar.textContent = "A:";

    const rivewLable = document.createElement("label");
    rivewli.appendChild(rivewLable);
    rivewLable.textContent = `${json[i].answer_0}`;

    const rivewli_b = document.createElement("li");
    rivewUl.appendChild(rivewli_b);

    const rivewPar_b = document.createElement("p");
    rivewli_b.appendChild(rivewPar_b);
    rivewPar_b.textContent = "B:";

    const rivewLable_b = document.createElement("label");
    rivewli_b.appendChild(rivewLable_b);
    rivewLable_b.textContent = `${json[i].answer_1}`;

    const rivewli_c = document.createElement("li");
    rivewUl.appendChild(rivewli_c);

    const rivewPar_c = document.createElement("p");
    rivewli_c.appendChild(rivewPar_c);
    rivewPar_c.textContent = "C:";

    const rivewLable_c = document.createElement("label");
    rivewli_c.appendChild(rivewLable_c);
    rivewLable_c.textContent = `${json[i].answer_2}`;

    const rivewli_d = document.createElement("li");
    rivewUl.appendChild(rivewli_d);

    const rivewPar_d = document.createElement("p");
    rivewli_d.appendChild(rivewPar_d);
    rivewPar_d.textContent = "D:";

    const rivewLable_d = document.createElement("label");
    rivewli_d.appendChild(rivewLable_d);
    rivewLable_d.textContent = `${json[i].answer_3}`;

    const rivewspan = document.createElement("div");
    rivewHeader.appendChild(rivewspan);
    rivewspan.innerHTML = `<h3>The answer is: ( <span>${json[i].correct}</span> ) </h3>  `;

    if (gg[i].answer == json[i].correct) {
      console.log(json[i]);

      if (gg[i].answer == json[i].answer_0) {
        rivewLable.style.cssText = `
                background:green;
                color:#fff;
                `;
      }

      if (gg[i].answer == json[i].answer_1) {
        rivewLable_b.style.cssText = `
                background:green;
                color:#fff;
                `;
      }

      if (gg[i].answer == json[i].answer_2) {
        rivewLable_c.style.cssText = `
                background:green;
                color:#fff;
                `;
      }

      if (gg[i].answer == json[i].answer_3) {
        rivewLable_d.style.cssText = `
                background:green;
                color:#fff;
                `;
      }
    } else {
      if (gg[i].answer == json[i].answer_0) {
        rivewLable.style.cssText = `
                background:red;
                color:#fff;
                `;
      }

      if (gg[i].answer == json[i].answer_1) {
        rivewLable_b.style.cssText = `
                background:red;
                color:#fff;
                `;
      }

      if (gg[i].answer == json[i].answer_2) {
        rivewLable_c.style.cssText = `
                background:red;
                color:#fff;
                `;
      }

      if (gg[i].answer == json[i].answer_3) {
        rivewLable_d.style.cssText = `
                background:red;
                color:#fff;
                `;
      }
    }

    tbody.appendChild(rivewHeader);
  }
};
x.open("GET", "/javascript/data.json");
x.send();

let home = document.getElementById("Home");
home.addEventListener("click", function () {
  window.location.assign("/Pages/home.html");
});
