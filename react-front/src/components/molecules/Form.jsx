import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
    let navigate = useNavigate(); 
    const submit = (e) =>{ 
        let path = `/user/${props.id}`; 
        navigate(path);
    }
  return (
    <div className='edit_container'>
        <img src={`https://cdn.traction.one/pokedex/pokemon/${props.id}.png`}/>
        <form className='edit_form'>
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
            <button type="submit" value="salvar" className="botao_enviar" onClick={submit}>
            Salvar
            </button>
        </form>
    </div>
  )
}
