import './error.css';

import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.png';

export default function Error(){
    return(
        <div className="container-error">
            <img src={notfound} alt="Página não encontrada" />
            <h2>Página não encontrada!</h2>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    );
}