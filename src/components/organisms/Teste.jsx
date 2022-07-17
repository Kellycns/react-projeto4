import React from 'react'
import { Link } from 'react-router-dom'

import perfil from '../../img/perfil.jpg'

export default function Teste(props) {
  return (
    <Link to={"/"} aria-label="meu perfil"><img src={props.avatar} alt="perfil" className="icone" id="icone_fotos"/></Link>
  )
}
