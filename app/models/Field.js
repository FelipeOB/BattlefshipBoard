class Field {
    constructor(id="N", classe) {
        this._id = id;
        this._classe = classe;
    }

    get id(){
        return this._id;
    }

    get classe(){
        return this._classe;
    }
}
