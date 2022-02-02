import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Links() {
    return(
      <div className="links-container">
        
        <div className="links-header">
          <Link to="/">
            <FiArrowLeft size={30} color="#FFF" />
          </Link>
          <h2>Meus Links</h2>
        </div>

        <div className="links-item">
          <button className="link">
            <FiLink size={18} color="#FFF" />
            https://www.google.com/
          </button>

          <button className="link-delete">
            <FiTrash size={18} color="#dc3545" />
          </button>
        </div>

        <div className="links-item">
          <button className="link">
            <FiLink size={18} color="#FFF" />
            https://www.google.com/
          </button>

          <button className="link-delete">
            <FiTrash size={18} color="#dc3545" />
          </button>
        </div>

      </div>
    );
}