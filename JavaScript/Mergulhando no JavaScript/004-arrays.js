var person1={
    name: 'André',
    age: 45
}
var person2 = {
    name: 'Dani',
    age: 43
}
var person3 = {
    name: 'Mateus',
    age: 15
}
var person4={
    name: 'Davi',
    age: 13
}
var list = [person1, person2, person3, person4];
console.log(list);
console.log(list[2].name);
//Iterando
for(var person of list){
    console.log(person);
}