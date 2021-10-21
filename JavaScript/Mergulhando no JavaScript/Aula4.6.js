var joao ={
    nome: 'João',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj){
        return this.email === obj.email;
    }
}

var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste@email.com'
}

console.log(joao.igualA(maria));