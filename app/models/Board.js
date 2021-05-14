class Board {
    constructor(tamanho) {
        this._tamanho = tamanho;

        this.ships = [];

        this.fields = [];
    }

    get tamanho() {
        return this._tamanho;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    fieldClick(id) {
        return this.fields[id].fieldClick();
    }

    adicionaBarco(ship) {
        this.ships.push(ship);
    }
}