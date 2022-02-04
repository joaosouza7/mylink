import { useState, useEffect } from 'react';
import './links.css';

import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import LinkItem from '../../components/LinkItem';
import { getLinksSave, deleteLink } from '../../services/storeLinks';

export default function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
      async function getLinks(){
        const result = await getLinksSave('@encurtaLink');
        console.log(result);
        
        if(result.length === 0){
          // Lista vazia...
          setEmptyList(true);
        }

        setMyLinks(result);
      }

      getLinks();
      
    }, [])

    function handleOpenLink(link){
      setData(link);
      setShowModal(true);
    }

    async function handleDelete(id){
      const result = await deleteLink(myLinks, id);

      if(result.length === 0){
        setEmptyList(true);
      }

      setMyLinks(result);

    }

    return(
      <div className="links-container">
        
        <div className="links-header">
          <Link to="/">
            <FiArrowLeft size={30} color="#FFF" />
          </Link>
          <h2>Meus Links</h2>
        </div>

        { emptyList && (
          <div className="links-item">
            <h3 className="empty-text">Sua lista está vazia...</h3>
          </div>
        )}

        { myLinks.map( link => (
          <div key={link.id} className="links-item">
            <button className="link" onClick={ () => handleOpenLink(link) }>
              <FiLink size={18} color="#FFF" />
              {link.long_url}
            </button>

            <button className="link-delete" onClick={() => handleDelete(link.id) }>
              <FiTrash size={18} color="#dc3545" />
            </button>
        </div>
        )) }

        { showModal && (
          <LinkItem 
            content={data}
            closeModal={ () => setShowModal(false) }
          />
        )}

      </div>
    );
}