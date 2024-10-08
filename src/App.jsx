import { useState } from 'react'
import './App.css'
import AdicionarCard from './componentes/AdicionarCard.jsx'



function App() {
  const[estudantes,setEstudantes] = useState([])

  const addEstudantes = (estudante) =>{
    setEstudantes([...estudantes,estudante]);
  }

  const ExcluirEstudante = (id) =>
    {
        const alunoRemover = estudantes.find(estudante => estudante.id == id)
        if(alunoRemover)
        {
            setEstudantes(estudantes.filter(estudante => estudante.id != id))
        }else{
            alert("Não foi possível encontrar este aluno!");
        }

  }

  return (
    <div>
      <header className='headerConteiner'>
        <div>
          <a href="https://ifrs.edu.br/osorio/"><img id='logoIf' src="https://ifrs.edu.br/wp-content/uploads/2022/08/Logo-IFRS-cores-sem-fundo-Vertical.png"  alt="" /></a>
          
        </div>
        <div className='conteinerLinks'>
          <a className="links"href="https://ifrs.edu.br/osorio/">Home</a>
          <a className="links" href="">Outras atividades</a>
          <a className="links" href="https://react.dev/reference/react">React</a>
        </div>
      </header>

      <div className='conteinerMain'>
        <div className='conteinerDescricao'>
          <h1>Bem Vindo ao registro de estudantes</h1>
            <h2>Adicione estudantes ao sistema através do formulário abaixo:</h2>
            <hr/>
        </div>
        
        <div className='conteinerCards'>
          <AdicionarCard AddEstudante={addEstudantes} estudantes={estudantes} ExcluirEstudante={ExcluirEstudante}></AdicionarCard>
        </div>
      </div>
     
    </div>
  )
}

export default App
