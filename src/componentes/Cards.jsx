
import Card from './Card'
import PropTypes from 'prop-types';
import "../Style/Cards.css"

function Cards({estudantes, FunctionExcluir})
{


    return(
        <div className='conteinerShowCards'>
            {estudantes && estudantes.length > 0 ? (estudantes.map((estudante,index) =>(
                      
                    <Card key={index} nome={estudante.nome} descricao = {estudante.descricao} id={estudante.id}  curso= {estudante.curso}ExcluirEstudante={FunctionExcluir}></Card>
                )
                )) : ("Não tem estudante no momento")}  
        </div>
    )
}

Cards.propTypes = {
    estudantes: PropTypes.arrayOf(
      PropTypes.shape({
        nome: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
      }).isRequired
    ).isRequired,
    FunctionExcluir: PropTypes.func.isRequired
  };

export default Cards