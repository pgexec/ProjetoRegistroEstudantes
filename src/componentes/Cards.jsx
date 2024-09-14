
import Card from './Card'
import PropTypes from 'prop-types';
import "../Style/Cards.css"


function Cards({estudantes, FunctionExcluir})
{

    const adicionaIdEstudante = (index) =>{

      estudantes[index].id = index
      return estudantes[index].id
    }

    return(
        <div className='conteinerShowCards'>
            {estudantes && estudantes.length > 0 ? (estudantes.map((estudante,index) =>(
                      
                    <Card key={index} nome={estudante.nome} descricao = {estudante.descricao} id={adicionaIdEstudante(index)} curso= {estudante.curso}ExcluirEstudante={FunctionExcluir}></Card>
                )
                )) : ("Não tem estudante")}  
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