import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import perfil from '../../img/perfil.jpg'
import Teste from './Teste';

export default function AppHeader(props) {
    const {userId} =useParams();
  
    const [user, setUser] = React.useState({
      avatar:"",
    });
  
    React.useEffect(() => {
      fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`
      ).then((response) => response.json())
      .then(data => {
        setUser(data[0].userData);
      });
    }, []);

  return (
    <section id="containerMenu">
        <header id="feedMenu" aria-label="cabeçalho">
            <div className="logo">
                <h2 aria-label="logomarca">MyPet</h2>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Pesquisar" aria-label="barra de pesquisa"/>
            </div>
            <nav className="itens" avatar={user.avatar}>
                <Link to={"/feed"} aria-label="home"><i className="fa-solid fa-house-chimney"></i></Link>
                <Link to={"/feed"} aria-label="mensagens"><i className="fa-solid fa-comment"></i></Link>
                <Link to={"/feed"} aria-label="novo post"><i className="fa-solid fa-square-plus"></i></Link>
                <Link to={"/feed"} aria-label="explorar"><i className="fa-solid fa-compass"></i></Link>
                <Link to={"/feed"} aria-label="notificações"><i className="fa-solid fa-bell"></i></Link>
                <Teste avatar= {user.avatar}/>
            </nav>
        </header>
    </section>
  )
}
