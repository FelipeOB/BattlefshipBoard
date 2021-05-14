class BoardView {

    template(board, boardController){
        const fieldDiv = document.querySelectorAll('.fieldcontainer');
        let tamanhoMais1 = board.tamanho + 1;
        let aux = 0;

        for (let i = 0; i < board.fields.length; i++)
        {
            let div = document.createElement("div");
            if(board.fields[i].classe == "field") {
                div.setAttribute("class", board.fields[i].classe);
                div.setAttribute("id", board.fields[i].id);
                div.addEventListener("click", (event) => {
                    event.preventDefault;
                    board.fieldClick(i);
                });
                fieldDiv[0].append(div);
            }else {
                div.setAttribute("class", board.fields[i].classe);
                let p = document.createElement("p")
                p.innerText = board.fields[i].id;
                div.append(p);  
                fieldDiv[0].append(div);
            }
        }

        fieldDiv[0].setAttribute("style", `width :${54 * tamanhoMais1}px`);

    }

    update(board, boardController) {
        document.querySelectorAll('.fieldcontainer').innerHTML = this.template(board, boardController);
    }
}