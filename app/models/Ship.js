class Ship {
    constructor(nome, tamanho) {
        this.nome = nome;
        this.tamanho = tamanho
        this.posicao = [];
        this.hit = [];
    }

    setPosicao(id) {
        this.posicao = [].concat(this.colocaPosicao(this.tamanho, id));
    }

    colocaPosicao(tamanho, id) {
        let posicao = [];
        for(let i = 0; i < tamanho; i++) {
            posicao.push(id);
            id += 1;
        }
        return posicao;
    }

    setHit (id){
        this.hit.push(id);
    }

}