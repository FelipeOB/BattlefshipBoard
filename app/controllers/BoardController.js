class BoardController {
    constructor() {
        let $ = document.querySelector.bind(document)
        let self = this;
       
        let shipsDB = [["barco4", 4], ["barco3", 3], ["barco2", 2]];//pegar no banco de dados
        let ships = [];
        ships.concat(shipsDB.forEach(elemento => ships.push(this.criaShip(elemento[0], elemento[1]))));
        console.log(ships);
       
        let boardView = new BoardView();
        let meuBoard = new Board(5);
        this.criaListaField(meuBoard);
        boardView.update(meuBoard, self);
        meuBoard.adicionaBarco(ships[0]);
        meuBoard.adicionaBarco(ships[1]);
        meuBoard.adicionaBarco(ships[2]);

        let boardInimigo = new Board(5);
        this.criaListaField(boardInimigo);

        let shipView = new ShipView();
        shipView.update(ships, self);
    }

    criaShip(nome, tamanho) {
        return new Ship(
            this.nome = nome,
            this.tamanho = tamanho
        )
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