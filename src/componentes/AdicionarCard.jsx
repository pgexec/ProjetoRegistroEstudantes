import { useState } from "react";
import PropTypes from 'prop-types';
import '../Style/AdicionarCard.css';

function AdicionarCard ({AddEstudante})
{
    const [nome,setNome] = useState("");
    const [descricao,setDescricao] = useState("");

    const handleNomeOnChange = (e) =>{
        setNome(e.target.value);
    }

    const handleDescricaoOnChange = (e) =>{
        setDescricao(e.target.value);
    }
    
    const createEstudante = (nome,descricao) =>{
        const novoEstudante  = {nome: nome, descricao: descricao, id:0}
        AddEstudante(novoEstudante);
        
    }
    return(

        <div className="conteinerFormu">
            <div className="conteinerInputs">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={handleNomeOnChange}/>
                <label htmlFor="">Descrição:</label>
                <input type="text" onChange={handleDescricaoOnChange}/>
            </div>
            <div className="conteinerButton">
                <button onClick={() => createEstudante(nome,descricao)}>Registrar</button>
            </div>
                   
        </div>
    )  
}

AdicionarCard.propTypes = {
        
    AddEstudante: PropTypes.func.isRequired,
};

export default AdicionarCard;