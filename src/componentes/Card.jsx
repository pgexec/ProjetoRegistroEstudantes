
import PropTypes from 'prop-types';
import imgIcon from '../assets/male.png'
import '../Style/Cards.css'

function Card({nome,descricao, id,curso,ExcluirEstudante}){

    return(
        <div className='CardConteiner'>
            <div className='divButtonClose'>
                <button className='buttonClose' onClick={() => ExcluirEstudante(id)} >x</button>
            </div>
            <div className='ImgConteiner'>
                <img className='imgPerson' src={imgIcon} alt="" />
            </div>
            <div className='MainConteinerInfo'>
                <div className='infoConteiner'>
                    <label htmlFor="">Nome:</label>
                    <p>{nome}</p>

                </div>
                <div className='infoConteiner'>
                    <label htmlFor="">Descrição:</label>
                    <p id='descricao'>{descricao}</p>
                </div>
                <div className='infoConteiner'>
                    <label htmlFor="">Curso:</label>
                    <p id='descricao'>{curso}</p>
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
    id:PropTypes.number.isRequired,
    curso:PropTypes.string.isRequired,
}

export default Card