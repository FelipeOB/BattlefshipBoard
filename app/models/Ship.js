class Ship {
    constructor(nome, tamanho, id) {
        this.nome = nome;
        this.tamanho = tamanho
        this.posicao = [].concat(this.colocaPosicao(this.tamanho, id));
        this.hit = [];
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