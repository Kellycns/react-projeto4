import React from 'react'
import { Link } from 'react-router-dom'
import { Default } from '../templates'

import perfil from '../../img/perfil.jpg'

export default function EditProfile() {
  return (
    <div>
        <Default/>
        <div className='edit_container'>
        
            <img src={perfil}/>
            <input
                type="text"
                name="name"
                id="new-name"
                className="campo"
                placeholder="Novo nome"
            />
            <input
                type="text"
                name="username"
                id="new-username"
                className="campo"
                placeholder="Novo nome de usuario"
            />
            <input
                type="text"
                name="bio"
                id="new-bio"
                className="campo"
                placeholder="Nova bio"
            />
            <button type="submit" value="salvar" className="botao_enviar">
            Salvar
            </button>
        </div>
    </div>
  )
}
