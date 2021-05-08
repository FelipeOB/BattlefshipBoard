class BoardController {
    constructor() {
        let board = new Board(10, 100, 100);
        let listaField = [].concat(listaField, criaListaField());
    }


    criaField(id, classe) {
        return new Field(
            this._id = id,
            this._classe = classe
        );
    }

    criaListaField() {
        let tamanho = board.tamanho + 1;
        let aux = 0;
        let listaField = [];
        for (let i = 0; i < tamanho * tamanho; i++) {
            if(i == 0){
                listaField.concat(listaField, this.criaField(null, "boardIndicator0"));
            }else if(i < tamanho){
                listaField.concat(listaField, this.criaField(null, "boardIndicatorX"));
            }else if(i % tamanho == 0) {
                listaField.concat(listaField, this.criaField(null, "boardIndicatorY"));
            }else {
                div.setAttribute("class", "field");
                if(i / tamanhoMais1 < 2){
                    listaField.concat(listaField, this.criaField(i - (tamanhoMais1 + 1), "field"));
                }else{
                    aux = Math.floor((i / tamanhoMais1) - 1);
                    listaField.concat(listaField, this.criaField(i - (tamanhoMais1 + 1 + aux), "field"));
                }
            }
        }
        return listaField;
    }
}