var min = 1;
var max = 101;
var randNum = Math.floor((max-min)*Math.random()+min);

function makeGuess(){
    var inputVal = parseInt(document.getElementById("input").value);
    if(randNum < inputVal){
        document.getElementById("clue").innerHTML = "Muito alto! Tenta de novo!"
    }else if (randNum >inputVal){
        document.getElementById("clue").innerHTML = "Muito baixo! Tenta de novo!"
    } else{
        document.getElementById("clue").innerHTML = "Parabéns !!! Você acertou cara!"
        var names = ["guess","title", "input", "btn"]
        names.forEach(name =>{
            var elem = document.getElementById(name);
            elem.parentNode.removeChild(elem);

        })
        document.getElementById("reload").style.visibility = "visible";
    }
}