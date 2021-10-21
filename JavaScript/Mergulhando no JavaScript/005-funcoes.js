function greet(name = 'Mergulhador'){
    return 'Bom dia! ' + name;
}

console.log(greet());
console.log( greet('André'));

var greeting = greet('Morais');
console.log(greeting);