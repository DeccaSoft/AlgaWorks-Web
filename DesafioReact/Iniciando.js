//Constante
const nome = "André"
document.writeln(nome)
//Variável
let age = 45
age = 46
document.writeln(age)
//Objeto
const me = {
  name: nome,
  age: age,
  contact: {
    email: "ama@lav.com",
    fone: "222-2222"
  }
}
document.writeln(me.name)

/* ... */

//Parametros: Elemento HTML, propriedades e Conteúdo

/*
const Hello = React.createElement(
    'p',
    { style: { color: 'red' } },
    'Hello, World!!!'
  )

  const App = React.createElement(
    'span',
    null,
    Hello
  )
  
  //Parametros: Componente, Local
  ReactDOM.render(
    App,
    document.querySelector('#app')
  )
*/

//Utilizando JSX (Feature React que permite utilizar HTML dentro do JS)
const colorPrimary = 'blue'
const Hello = <p style={{color: colorPrimary}}>
  Hello, World !!!
</p>

const App = React.createElement(
  'span',
  null,
  Hello
)

//Parametros: Componente, Local
ReactDOM.render(
  App,
  document.querySelector('#app')
)

//Trabalhando com Propriedades
const color = 'blue'

function Hello (props) {
  const className = 'aw-' + props.cn
  return <p className={className}>
    Hello, { props.name }
  </p>
}
//Quase a mesma coisa que: 
/*
const Hello = () =>
  <p className="batata">
    Hello, World !!!
  </p>
*/
const App = () => <span>
  <Hello name="Andre" cn="blue" />
</span>
)

//Parametros: Componente, Local
ReactDOM.render(
  <App />,  //Poderia ser App()
  document.querySelector('#app')
)

