var result = document.getElementById("result");
let intervalId = setInterval(function(){
    var a1 = document.getElementById("1").value;
    var a2 = document.getElementById("2").value;
    var a3 = document.getElementById("3").value;
    var a4 = document.getElementById("4").value;
    var a5 = document.getElementById("5").value;
    var a6 = document.getElementById("6").value;
    var a7 = document.getElementById("7").value;
    var a8 = document.getElementById("8").value;
    var a9 = document.getElementById("9").value;
    if(   
        ((a1 == a5) && (a5 == a9)) ||
        ((a3 == a5) && (a5 == a7)) || 
        ((a2 == a5) && (a5 == a8)) ||
        ((a4 == a5) && (a5 == a6))){
            if(a5!= ""){
                result.innerHTML= `${a5} has won the game!`
                result.classList.add("result");
                clearInterval(intervalId);
            }   
        }
    if(
        ((a1 == a4) && (a1 == a7)) ||
        ((a1 == a2) && (a1 == a3))){
            if(a1!= ""){
                result.innerHTML= `${a1} has won the game!`
                result.classList.add("result");
                clearInterval(intervalId);
            } 
        }

    if(
        ((a3 == a6) && (a3== a9)) ||
        ((a7 == a8) && (a7 == a9))){
            if(a9!= ""){
                result.innerHTML= `${a9} has won the game!`
                result.classList.add("result");
                clearInterval(intervalId);
            } 
        }
 },2000);