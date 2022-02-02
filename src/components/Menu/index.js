import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className="menu">
            <a href="https://www.youtube.com/" className="social">
                <BsYoutube size={20} color="#FFF" />
            </a>

            <a href="https://www.instagram.com/" className="social">
                <BsInstagram size={20} color="#FFF" />
            </a>

            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    );
}