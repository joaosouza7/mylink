// Buscando links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvar um link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // Se já tiver um link com um determinado ID salvo não vai duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id);

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA!');
        return;
    }

    // Adicionar o novo link na lista...
    linksStored.push(newLink);
    localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('LINK SALVO COM SUCESSO!');
}

// Deletar um link do localStorage
export function deleteLink(links, id){
    
    let myLinks = links.filter( item => {
        return (item.id !== id);
    });

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log('LINK DELETADO COM SUCESSO!');

    return myLinks;
    
}