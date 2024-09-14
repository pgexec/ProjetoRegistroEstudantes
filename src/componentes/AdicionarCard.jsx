import { useState } from "react";
import PropTypes from 'prop-types';
import '../Style/AdicionarCard.css';

function AdicionarCard ({AddEstudante})
{
    const [nome,setNome] = useState("");
    const [descricao,setDescricao] = useState("");
    const [select,setSelect] = useState([
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
    ])

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

    const [SelectedClass,setSelectedClass] = useState("optionsCurso");

    const SelectedActive = () =>{

        setSelectedClass("optionCursoActive");
    }
    
    const createEstudante = (nome,descricao,curso) =>{
        const novoEstudante  = {nome: nome, descricao: descricao, id:0,curso:curso}
        AddEstudante(novoEstudante);
        
    }

    return(

        <div className="conteinerFormu">
            <div className="selectConteiner">
                {select.map((selects,index) => (
                    <li onClick={() => {handleSelectCurso(selects.nome); SelectedActive} } className={SelectedClass} key={index}>{selects.sigla}{index}</li>
                ))}
            </div>
            <div className="conteinerInputs">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={handleNomeOnChange}/>
                <label htmlFor="">Descrição:</label>
                <input type="text" onChange={handleDescricaoOnChange}/>
                <button className="buttonGeneric" onClick={() => createEstudante(nome,descricao,cursoSelecionado)}>Registrar</button>
            </div>                   
        </div>
    )  
}

AdicionarCard.propTypes = {
        
    AddEstudante: PropTypes.func.isRequired,
};

export default AdicionarCard;