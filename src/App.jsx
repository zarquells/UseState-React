import { useState } from 'react'
//o useState é usado para gerenciar estados de alguma entidade
//como em POO, onde temos Get e Set para manipular entidades

import './App.css'

function App() {
  const entidade = useState('valor inicial');
  //entidade | valor inicial da entidade = useState('...')
  //através do useState que definimos o 'verde' como VALOR INICIAL

  const [cor] = useState('verde');
  //o useState é interpretado como uma array de [valor inicial, +função]
  //'+função' é a usado para alterar o valor da entidade

  const [TrueorNot, setTrueorNot] = useState('Yes')
  //a sintaxe do useState usa a função anônima
  //ao lado do nome da entidade como acima

  const comandoYES = () =>{
    setTrueorNot((prevTrue) => prevTrue = "Yes")
  }
  //a função acima é responsável por mudar o valor da entidade
  //o uso do 'Previous Value' (valor anterior) é sinal de boas práticas
  //ajudar a controlar a entidade com várias funções, etc...

  const comandoNOT = () => {
    setTrueorNot((prevTrue) => prevTrue = "No")
  }

  return (
    <>
      <div>
        <h2>Jogo do Sim ou Não!</h2>
        <p>Consiste em você mudar com um CLIQUE, o valor abaixo:</p>
        <p id='value'>{TrueorNot}</p>

        <button onClick={comandoYES}>YES</button>
        <button onClick={comandoNOT}>NO</button>

        <p id='pequeno'>(você pode modificar temporariamente o valor também)</p>
        <input type='text' value={TrueorNot}
        //valor referente ao da entidade TrueorNot 
        //(o qual pode variar entre 'yes' ou 'no') 

        //ler linha por linha atentamente (complexo)
          onChange={
          //onChange = mudança de estado variável associada a uma função anterior
            (evento) => setTrueorNot(evento.target.value)
            //"quando esta {função} ocorrer, a associe."
            //{função} = mudança de estado da entidade
            //"associe"= setar o valor do input como a da entidade
          }
        />

      </div>
    </>
  )
}

export default App