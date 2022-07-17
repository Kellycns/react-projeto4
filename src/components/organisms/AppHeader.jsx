import React from 'react'
import { Link } from 'react-router-dom'

import perfil from '../../img/perfil.jpg'

export default function AppHeader() {
  return (
    <section id="containerMenu">
        <header id="feedMenu" aria-label="cabeçalho">
            <div className="logo">
                <h2 aria-label="logomarca">MyPet</h2>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Pesquisar" aria-label="barra de pesquisa"/>
            </div>
            <nav className="itens">
                <Link to={"/feed"} aria-label="home"><i className="fa-solid fa-house-chimney"></i></Link>
                <Link to={"/feed"} aria-label="mensagens"><i className="fa-solid fa-comment"></i></Link>
                <Link to={"/feed"} aria-label="novo post"><i className="fa-solid fa-square-plus"></i></Link>
                <Link to={"/feed"} aria-label="explorar"><i className="fa-solid fa-compass"></i></Link>
                <Link to={"/feed"} aria-label="notificações"><i className="fa-solid fa-bell"></i></Link>
                <Link to={"/feed"} aria-label="meu perfil"><img src={perfil} alt="perfil" className="icone" id="icone_fotos"/></Link>
            </nav>
        </header>
    </section>
  )
}
