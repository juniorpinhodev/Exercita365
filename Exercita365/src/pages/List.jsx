import { useParams } from 'react-router-dom';

function List() {
  const {id} = useParams()
  return ( 
    <h1>Lista do usuário {id}</h1> 
  );
}

export default List;