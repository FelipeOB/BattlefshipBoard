//criar divs que representaram os fields dos campos
const fieldDiv = document.querySelectorAll(".fieldcontainer")
let tamanho = 10;
let tamanhoMais1 = tamanho + 1;
let aux = 0;
for (let i = 0; i < tamanhoMais1 * tamanhoMais1; i++) {
    if(i == 0){
        var div = document.createElement("div");
        div.setAttribute("class", "boardIndicatorX");
        fieldDiv[0].append(div);
    }else if(i < tamanhoMais1){
        var div = document.createElement("div");
        div.setAttribute("class", "boardIndicatorX");
        div.setAttribute("style", "background-color: black");
        fieldDiv[0].append(div);
    }else if(i % tamanhoMais1 == 0) {
        var div = document.createElement("div");
        div.setAttribute("class", "boardIndicatorY");
        div.setAttribute("style", "background-color: red");
        fieldDiv[0].append(div);
    }else {
        var div = document.createElement("div");
        div.setAttribute("class", "field");
        div.setAttribute("style", "background-color: blue");
        if(i / tamanhoMais1 < 2){
            div.setAttribute("id", `${i - (tamanhoMais1 + 1)}`);
        }else{
            aux = Math.floor((i / tamanhoMais1) - 1);
            div.setAttribute("id", `${i - (tamanhoMais1 + 1 + aux)}`);
        }
        div.classList.add("field");
        fieldDiv[0].append(div);
        div.addEventListener("click", () => {alert("Acessando um field")})
    }
}
const indicatorXdiv = document.querySelectorAll(".boardIndicatorX");
const indicatorYdiv = document.querySelectorAll(".boardIndicatorY");

for (let i = 0; i < indicatorXdiv.length; i++) {
    var pXdiv = document.createElement("p");    //declaracao elementos p
    indicatorXdiv[i].append(pXdiv);             //append de [pxdiv] em indicatorXdiv
    pXdiv.innerText = [i + 1];                    //adicionar texto no elemento p
    pXdiv.style.color = "white";                //general styling
    pXdiv.style.textAlign = "center";
}
let aux2 = 65;
var letra = String.fromCharCode(aux2);
for (let i = 0; i < indicatorYdiv.length; i++) {
    var pYdiv = document.createElement("p");    //declaracao elementos p
    indicatorYdiv[i].append(pYdiv);             //append de [pxdiv] em indicatorXdiv
    pYdiv.innerText = letra;                    //adicionar texto no elemento p
    aux2 += 1;
    letra = String.fromCharCode(aux2);
    pYdiv.style.color = "white";                //general styling
    pYdiv.style.textAlign = "center";
}

fieldDiv[0].setAttribute("style", `width :${54 * tamanhoMais1}px`); 
//54 vem do (tamanho de cada tile: 50px) E (tamando da margem: 2px)*2 especificado do CSS .field