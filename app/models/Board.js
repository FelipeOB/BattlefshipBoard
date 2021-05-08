class Board {
    constructor(tamanho, width=50, height=50) {
        this._tamanho = tamanho;
        this._width = width;
        this._height = height;
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
}