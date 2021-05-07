//criar divs que representaram os fields dos campos
const fieldDiv = document.querySelectorAll(".fieldcontainer")
let tamanho = 10;
let tamanhoMais1 = tamanho + 1;
let aux = 0;
for (let i = 0; i < tamanhoMais1 * tamanhoMais1; i++) {
    if(i == 0){
        var div = document.createElement("div");
        div.setAttribute("class", "field");
        div.classList.add("field");
        fieldDiv[0].append(div);
    }else if(i < tamanhoMais1){
        var div = document.createElement("div");
        div.setAttribute("class", "field");
        div.setAttribute("style", "background-color: black");
        div.classList.add("field");
        fieldDiv[0].append(div);
    }else if(i % tamanhoMais1 == 0) {
        var div = document.createElement("div");
        div.setAttribute("class", "field");
        div.setAttribute("style", "background-color: red");
        div.classList.add("field");
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
    }
}
