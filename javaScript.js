// 1 - 100 arasında bir sayı tut
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

// Variables
let  score = 10;
let topScore = 0;

// CheckBtn basıldığında kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);  
    const msg = document.querySelector(".msg");

// eğer input a bir değer girilmediyse
if(!guessInput) {
    msg.innerText = "Please enter a number";
// eğer rastgele === input.value
} else if (randomNumber === guessInput){
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    document.querySelector("body").style.background = "green";
    document.querySelector(".check-btn").disabled = true;

    if (score > topScore) {
        topScore = score;
        document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
// eğer rastgele != input.value
}else{
    if(score > 1) {
        score--;    // score u 1 azalt

    guessInput > randomNumber
    ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE`)
    : (msg.innerHTML= `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE`);
    }else {
        msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
        document.querySelector("body").style.background = "red";
        document.querySelector(".secret-number").textContent = randomNumber;
        document.querySelector(".check-btn").disabled = true;
    }
    document.querySelector(".score").textContent = score;
}   
});

//* again basildiginda oyunu baslangic dgerlerin kur
document.querySelector(".again-btn").addEventListener("click", () => {
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random() * 100);
    document.querySelector(".secret-number").textContent = "?";
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").style.background = "#2d3436";
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText = `Starting..`;
  });
  
  document.querySelector(".guess-input").addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      document.querySelector(".check-btn").click();
    }
  });








