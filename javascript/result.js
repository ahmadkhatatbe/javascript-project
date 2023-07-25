
let htresult = ``;
let correctresult = document.getElementById("correctresult");
let incorrectresult = document.getElementById("incorrectresult");
let containerresult = document.getElementById("containerresult");
let finish = document.getElementById("finish");
let result = document.getElementById("result");

  let aa;
  let arr = localStorage.getItem("user_answer");  
  aa = JSON.parse(arr);


  let alen = aa.length - 1;

      htresult = `
      
            <h2 class="label">Your Result is there</h2>
<img src="" alt="">
<h3 id="h3result">You Faild!</h3>
<p>YOUR OVERALL SCORE</p>
<P id="percentresult">40% LOW</P>
<P>"GOOD LUCK"</P>
<div class="footercontainer">
    <p>Correct answers <span class="correctreuslt" id="correctresult" >${aa[alen].countright} </span></p>
    <p>Wrong answer <span class="core" id="incorrectresult"> ${aa[alen].countright} </span></p>
</div>
           `
    
result.innerHTML=htresult
   
  

