class ShipView {

    template(ships, boardController) {
        ships.forEach(ship => {
            const fieldDiv = document.querySelectorAll('.fieldcontainer');
            var div = document.createElement("div");
            div.classList.add("ship");
            div.setAttribute("id", `${ship.nome}`)
            switch (ship.tamanho) {
                case 4: var img = document.createElement("img");
                        div.append(img);
                        break;
                case 3: var img = document.createElement("img");
                        div.append(img);
                        break;
                case 2: var img = document.createElement("img");
                        div.append(img);
                        break;
                case 1: var img = document.createElement("img");
                        div.append(img);
                        break;
                default: console.log("Tamanho inválido");
            }

            div.addEventListener("click", event => {
                event.preventDefault;
                var fields = document.querySelectorAll('.field');
                fields.forEach(divField => {
                    divField.addEventListener("mouseover", event => {
                        divField.setAttribute("style", "background-color: red");
                    })
                    divField.addEventListener("mouseout", event => {
                        event.preventDefault;
                        divField.setAttribute("style", "background-color: aqua");
                    })
                    divField.addEventListener("click", function clica(event, ships) {
                        event.preventDefault;
                        console.log(ship)
                        ship.setPosicao(parseInt(divField.getAttribute("id"), 10));
                        fields.forEach(field => {
                            field.removeEventListener("click", clica); 
                            field.removeAttribute("style")
                        });
                    });
                })
            })

            fieldDiv[0].append(div);
        })
    }
    update(ships, boardController) {
        document.querySelectorAll('.fieldcontainer').innerHTML = this.template(ships, boardController);
    }
}