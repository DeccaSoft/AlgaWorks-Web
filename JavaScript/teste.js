var x = 5;
console.log('teste');
console.log(x);
console.log("");

//Escopo de Variáveis

var nome = 'André'; //Variável Global

var capitalizar = function(){
    var nome = 'Morais'.toUpperCase();  //Variável Local
    console.log('capitalizar: ' + nome);
}

var capitalizar2 = function(){
    nome = 'Azevedo'.toUpperCase(); //Não declarada, vira escopo Global
    console.log('capitalizar2: ' + nome);
}

console.log(nome);
capitalizar();
capitalizar2();
console.log(nome);
console.log("");

//Closures

var i1 = 0;
function incrementar1(){
    return ++i1;
}
console.log(incrementar1());
console.log(incrementar1());
console.log(incrementar1());
console.log("");

//Colocando i em escopo local... Obviamente, não vai dar certo!!!

function incrementar2(){
    var i2 = 0;
    return ++i2;
}
console.log(incrementar2());
console.log(incrementar2());
console.log(incrementar2());
console.log("");

//Solução = Closures

console.log("Closures...")
function incrementar3(){
    var i3 = 0;
    return function(){
        return ++i3;
    }
}

var fn = incrementar3();
console.log(fn());
console.log(fn());
console.log(fn());
console.log("");

//Spoiler: Funçoes Autoexecutáveis:

console.log("Função Autoexecutável...")
var incrementar4 = (function(){
    var i4 = 0;
    return function(){
        return ++i4;
    }
})();

console.log(incrementar4());
console.log(incrementar4());
console.log(incrementar4());
console.log("");