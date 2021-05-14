class Bind {
    constructor(model, view,...props) {
        let proxy = ProxyFactory.create(model, props, 
            model => 
                function (id, board){
                    for(let i = 0; i < board.ships.length; i++){
                        for(let j = 0; j < board.ships[i].posicao.length; j++){
                            if(board.ships[i].posicao[j] == id){
                                console.log(id);
                                board.ships[i].setHit(id);
                                break;
                            }
                        }
                    }
                });
        view.update(model);
        return proxy;
    }

}