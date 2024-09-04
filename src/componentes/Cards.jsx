
import Card from './Card'
import PropTypes from 'prop-types';


function Cards({estudantes, FunctionExcluir})
{
    return(
        <div>
            {estudantes && estudantes.length > 0 ? (estudantes.map((estudante,index) =>(
                    <Card key={index} nome={estudante.nome} descricao = {estudante.descricao} ExcluirEstudante={FunctionExcluir}></Card>
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
      }).isRequired
    ).isRequired,
    FunctionExcluir: PropTypes.func.isRequired
  };

export default Cards