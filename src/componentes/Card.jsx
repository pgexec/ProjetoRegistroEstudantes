
import PropTypes from 'prop-types';
import imgIcon from '../assets/male.png'
import '../Style/Cards.css'

function Card({nome,descricao, id,ExcluirEstudante}){

    return(
        <div className='CardConteiner'>
            <button onClick={() => ExcluirEstudante(id)}>close</button>
            <div className='ImgConteiner'>
                <img src={imgIcon} alt="" />
            </div>
            <div className='MainConteinerInfo'>
                <div className='infoConteiner'>
                    <label htmlFor="">Nome:</label>
                    <h2>{id}</h2>
                    <h2>{nome}</h2>
                </div>
                <div className='infoConteiner'>
                    <label htmlFor="">Descrição:</label>
                    <h2 id='descricao'>{descricao}</h2>
                </div>
            </div>
            
            
        </div>
    )
}

Card.propTypes =
{
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    ExcluirEstudante: PropTypes.func.isRequired,
    id:PropTypes.number.isRequired
}

export default Card