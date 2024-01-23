let inputGuess = document.querySelector("#guess");
let btnGuess = document.querySelector("#my_btn");
let gizliReqem = Math.trunc(Math.random() * 10 * 10) + 1;
let elaveMesaj = document.querySelector("#message3");
let container = document.querySelector(".container");
let zero = document.querySelector(".zero");
let question = document.querySelector(".question");
console.log(gizliReqem);
let counter = 0 ;

btnGuess.addEventListener("click", function(){
if(Number(inputGuess.value) === gizliReqem){
console.log("Buton isledi");
counter = counter + 1;
zero.textContent = counter; 
container.style.background = "#6DB31D";
question.textContent = gizliReqem;
elaveMesaj.textContent = "Təbriklər! Oyunu uddunuz.";
}
else if(Number(inputGuess.value) < gizliReqem){
console.log("Buton isledi");
if(counter < 5 ){
    counter = counter + 1;
    zero.textContent = counter; 
    elaveMesaj.textContent = "Reqemi artir.";
    }else {    
        zero.textContent = 5;
        container.style.background = "#E23939";
        elaveMesaj.textContent = "Oyunu uduzdunuz."
    }
} 
else if(Number(inputGuess.value) > gizliReqem){
console.log("Buton isledi");
if(counter < 5 ){
    counter = counter + 1;
    zero.textContent = counter; 
    elaveMesaj.textContent = "Reqemi azalt.";
    }else{    
        zero.textContent = 5;
        container.style.background = "#E23939";
        elaveMesaj.textContent = "Oyunu uduzdunuz."
    }
}  
});      //! texmin et butonuna her daxil olduqda artmaq evezine 1 de qalir.