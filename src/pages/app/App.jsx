
import './App.scss';
import  {Link} from 'react-router-dom';
import Cabecalho from '../componentes/index.jsx'



export default function App() {
 

    return (


 <div className='Cont'>
    <div className="App">
<Cabecalho/>
        <Link to='/contato'><p>FAÇA SUA INSCRIÇÃO AGORA </p></Link>

    </div>
    </div>

 );
   
}


