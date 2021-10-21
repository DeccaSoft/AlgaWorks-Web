var me = {
    name: 'André',
    age: 45
}

function checkAge(person){
    console.log('A idade da pessoa é: ' + person.age)
    if(person.age > 17){
        console.log('Maior de Idade')
    }else{
        console.log('Menor de Idade')
    }
}

checkAge(me)