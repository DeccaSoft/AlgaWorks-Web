setTimeout(() => {
    console.log('Executou após 2 segundos')
}, 2000);

const interval = setInterval(() => {
    console.log('Executando de 1 em 1 segundos')
}, 1000);

setTimeout(() => {
    clearInterval(interval)
}, 5000);