// 1 - 100 arasında bir sayı tut
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

// CheckBtn basıldığında kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);  
    const msg = document.querySelector(".msg");

// eğer input a bir değer girilmediyse
if(!guessInput) {
    msg.innerText = "Pease enter a number";
}    
});











