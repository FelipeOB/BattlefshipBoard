class BoardController {
    constructor() {
        let $ = document.querySelector.bind(document)
        let self = this;
        let ship4 = new Ship("barco4", 4, 10);
        let ship5 = new Ship("barco4", 4, 15);
        let board = new Board(10);
        let boardView = new BoardView(); // documento.querySelector(.fieldcontainer)

        this.criaListaField(board);
        board.adicionaBarco(ship4);
        board.adicionaBarco(ship5);

        console.log(board);
        boardView.update(board, self);
    }

    fieldClick(id, board){
        for(let i = 0; i < board.ships.length; i++){
            for(let j = 0; j < board.ships[i].posicao.length; j++){
                if(board.ships[i].posicao[j] == id){
                    console.log(id);
                    board.ships[i].setHit(id);
                    break;
                }
            }
        }
    }

    criaField(id, classe) {
        return new Field(
            this._id = id,
            this._classe = classe
        );
    }

    criaListaField(board) {
        let tamanho = board.tamanho + 1;
        let letra = 65;
        let num = 1;
        let aux = 0;
        for (let i = 0; i < tamanho * tamanho; i++) {
            if(i == 0){
                board.fields.push(this.criaField(null, "boardIndicator0"));
            }else if(i < tamanho){
                board.fields.push(this.criaField(num, "boardIndicatorX"));
                num += 1;
            }else if(i % tamanho == 0) {
                board.fields.push(this.criaField(String.fromCharCode(letra), "boardIndicatorY"));
                letra += 1;
            }else {
                if(i / tamanho < 2){
                    board.fields.push(this.criaField(i - (tamanho + 1), "field"));
                }else{
                    aux = Math.floor((i / tamanho) - 1);
                    board.fields.push(this.criaField(i - (tamanho + 1 + aux), "field"));
                }
            }
        }
    }
}