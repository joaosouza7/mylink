import { FiLink } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import Menu from '../../components/Menu';

import './home.css';

export default function Home() {
    return(
      <div className="container-home">
        
        <div className="logo">
          <img src={logo} alt="logo" />

          <h2>MyLink</h2>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color='#FFF' />
            <input 
              type='text'
              placeholder='Cole seu link aqui...'
            />
          </div>

          <button>Gerar Link</button>
        </div>

        <Menu />

      </div>
    );
}