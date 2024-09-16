import { useState } from "react";
import PropTypes from 'prop-types';
import '../Style/AdicionarCard.css';
import Cards from './Cards'
import { v4 as uuidv4 } from 'uuid';
import Message from "./Message";

function AdicionarCard ({AddEstudante, estudantes, ExcluirEstudante})
{
    const [nome,setNome] = useState("");
    const [descricao,setDescricao] = useState("");
    const select = [
        {
            sigla: "ADS",
            nome: "Analise Desenvolvimento de Sistema"
        },
        {
            sigla: "TPG",
            nome:"Tecnologia em Processos Gerenciais"
        },
        {
            sigla:"LM",
            nome:"Licenciatura em Matemática"
        },
        {
            sigla:"LL",
            nome:"Licenciatura em Letras"
        }
    ]

    const [cursoSelecionado, SetCursoSelecionado] = useState("");

    const handleNomeOnChange = (e) =>{
        setNome(e.target.value);
    }

    const handleDescricaoOnChange = (e) =>{
        setDescricao(e.target.value);
    }

    const handleSelectCurso = (sigla) =>{
        console.log(sigla);
        SetCursoSelecionado(sigla);
    }
   
    const createEstudante = (nome,descricao,curso) =>{
        const novoEstudante  = {nome: nome, descricao: descricao, id:uuidv4(),curso:curso}
        AddEstudante(novoEstudante);           
    }

    const [showErro, setShowErro] = useState(false)

    const showErroFunction = (resposta) =>{
        setShowErro(resposta);
        if (resposta) {
            setTimeout(() => {
                setShowErro(false);
            }, 2000); // 3 segundos
        }
    }

    const [showRegister, SetShowRegister] = useState(false)

    const showRegisterConcluido = (resposta) =>{
        SetShowRegister(resposta);
        if(resposta){
            setTimeout(() => {
                SetShowRegister(false);
            },2000)
        }
    }

    return(

        <div className="conteinerFormu">
            <div className="selectConteiner">
                {select.map((selects,index) => (
                    <li onClick={() => {handleSelectCurso(selects.nome); }} className={selects.nome == cursoSelecionado ? "optionCursoActive" : "optionsCurso"}  key={index}>{selects.sigla}</li>
                ))}
            </div>
            {estudantes.filter(estudante => estudante.curso == cursoSelecionado).length > 0 ? 
            <div className='conteinerEstudantes'>
                <div>
                    <h2>Alunos adicionados:</h2>
                </div>
                    <Cards estudantes={estudantes.filter(estudante => estudante.curso == cursoSelecionado)}  FunctionExcluir={ExcluirEstudante}></Cards>
            </div> : "Não tem Alunos"}
                

            <div className="conteinerInputs">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={handleNomeOnChange}/>
                <label htmlFor="">Descrição:</label>
                <input type="text" onChange={handleDescricaoOnChange}/>
                {nome != "" && descricao != "" && cursoSelecionado != "" ? 
                    <div>
                        <button className="buttonGeneric" onClick={() => {createEstudante(nome,descricao,cursoSelecionado); showRegisterConcluido(true);}}>Registrar</button>
                        {showRegister ? <Message className="MessageRegister">Registrado com sucesso</Message> : null}
                    </div>:
                    <div>
                        <button className="buttonGeneric" onClick={() =>showErroFunction(true)}>Registrar</button>    
                        {showErro ? <Message className="MessageErro" >Erro falta alguma identificação a preencher!</Message> : null}
                    </div>
                }     
            </div>                   
        </div>
    )  
}

AdicionarCard.propTypes = {
        
    AddEstudante: PropTypes.func.isRequired,
    estudantes: PropTypes.array.isRequired,
    ExcluirEstudante: PropTypes.func.isRequired
};

export default AdicionarCard;