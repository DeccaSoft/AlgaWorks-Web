const person = {
    name: 'André',
    age: 46
}

function introduce1 (name, age){
    console.log(`Oi! Meu nome é ${name} e eu tenho ${age} anos.`);
}

introduce1(person.name, person.age)

//Utiliza-se a Desconstrução {} à medida que se aumaentam os argumantos da função introduce(), evitando-se utilizar person.name, etc... Basta utilizar introduce(person);

function introduce2 ({name, age}){
    console.log(`Oi! Meu nome é ${name} e eu tenho ${age} anos.`);
}

introduce2(person)

console.log("======================================================");

const fruits1 = ['banana', 'morango', 'manga']
const firstFruit = fruits1[0]
const secondFruit = fruits1[1]
const thirdFruit = fruits1[2]
console.log(firstFruit + ', ' + secondFruit + ', ' + thirdFruit);

//Desestruturando o Array... Reduz-se as linhas de código
const fruits2 = ['abacaxi', 'caju', 'goiaba']
const [firstFruit2, secondFruit2, thirdFruit2] = fruits2
console.log(firstFruit2 + ', ' + secondFruit2 + ', ' + thirdFruit2);

console.log("==== Desestruturando Objetos =========");

const pessoa = {
    nome: 'Dani',
    idade: 44,
    contato: {
        email: 'dani@gmail.com'
    }
}

const {nome, idade, contato: {email}} = pessoa
console.log(nome + ', ' + idade + ', ' + email)
const {nome: apelido} = pessoa
console.log(apelido);

console.log("==== Desestruturando Arrays =========");

const frutas = ['limão', 'tangerina','abacate']
const [fruta1, , fruta3] = frutas
console.log(fruta1 + ", " +  fruta3);

console.log("==== Desestruturação Complexa =========");

const p1 = {sr: 'Joaquim', age: 32}
const p2 = {sr: 'Jonas', age: 33}
const p3 = {sr: 'Joao', age: 34}
const friends = [p1, p2, p3]

const segundo = friends[1]
const name = segundo.sr;
console.log(name)

//Com desestruturação

const [, {sr}] = friends
console.log(sr);

const chart = [[1,2], [3,4], [5,6]]
const [, , [, y]] = chart
console.log(y)

console.log("==== Desestruturação Função =========");

function createUser(usuario, senha, email){
    return{
        usuario,
        senha,
        contact: {email}
    }
}

let user = createUser('Lucas', 22, 'lucas@gmail.com')
console.log(user);

console.log("--- Desestruturação o Retorno de uma Função ---");

let {usuario} = createUser('Magno', 36, 'maguim@gmail.com')
console.log(usuario);

console.log("--- Desestruturação os Parâmetros de uma Função ---");

function createUser2(user){
    return{
        user: user.usuario,
        senha: user.senha,
        contact: {email: user.email}
    }
}

let user2 = createUser2({
    usuario: 'Davi',
    senha: 44,
    email: 'davi@gmail.com'
})
console.log(user2);

function createUser3({user, senha, email}){
    return{
        user,
        senha,
        contact: {email}    
    }
}

let user3 = createUser3({
    user: 'Mateus',
    senha: 58,
    email: 'mateus@gmail.com'
})
console.log(user3);