
let htresult = ``;
let correctresult = document.getElementById("correctresult");
let incorrectresult = document.getElementById("incorrectresult");
let containerresult = document.getElementById("containerresult");
let finish = document.getElementById("finish");
let result = document.getElementById("result");
let btnresult = document.getElementById("btnresult");

  let aa;
  let arr = localStorage.getItem("user_answer");  
  arrabstract = JSON.parse(arr);


  let alen = arrabstract.length - 1;
  let counteright = Math.floor(arrabstract[alen].countright*0.05*100)
  let counterwrong = Math.floor(arrabstract[alen].countwrong * 0.05 * 100);
counterwrong=100-counterwrong

if (arrabstract[alen].countright > arrabstract[alen].countwrong) {
 
      htresult = `
      
        <h2 class="label">Your Result is there</h2>
<img src="" alt="">
<h3 id="h3result" style="color:green">You pass!</h3>
<p>YOUR OVERALL SCORE</p>
<P id="percentresult">${counteright + " %"}</P>
<P>"PERFECT"</P>
<div class="footercontainer">
    <p style="color:green">Correct answers <span class="correctreuslt" id="correctresult" >${
      arrabstract[alen].countright
    } </span></p>
    <p style="color:red">Wrong answer <span class="core" id="incorrectresult" > ${
      arrabstract[alen].countwrong
    } </span></p>
    <form action="../pages/review.html">
    <button id="btnResult">Review Answer</button>
    </form>
</div>

           `;
}else if (arrabstract[alen].countright < arrabstract[alen].countwrong) {
    
  htresult = `
      
        <h2 class="label">Your Result is there</h2>
<img src="" alt="">
<h3 id="h3result" style="color:red">You Faild!</h3>
<p>YOUR OVERALL SCORE</p>
<P id="percentresult">${counterwrong + " %"}</P>
<P>"GOOD LUCK"</P>
<div class="footercontainer">
    <p style="color:green">Correct answers <span class="correctreuslt" id="correctresult" >${
      arrabstract[alen].countright
    } </span></p>
    <p style="color:red">Wrong answer <span class="core" id="incorrectresult" > ${
      arrabstract[alen].countwrong
    } </span></p>
    <form action="../pages/review.html">
    <button id="btnResult">Review Answer</button>
    </form>
</div>
           `;
}
result.innerHTML=htresult
   
  

