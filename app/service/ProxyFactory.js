class ProxyFactory {
    
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);//Aplica a reflexao na propriedade target, no contexto de target, recebendo os argumentos ARGUMENTS(que sao todos os paramentros passados para a funcao interceptada)
                                                                       //ou seja, na propriedade do meu target, no contexto do meu target, eu aplico o metodo de la com os arguments que eu passar
                        return acao(target);
                    };
                };
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                console.log(`interceptando ${prop}`);
                if(props.includes(prop)) {
                    Reflect.set(target, prop, value, receiver)
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }

        });
    };

    static _ehFuncao(func) {
        return typeof(func) == typeof(Function)
    }

}