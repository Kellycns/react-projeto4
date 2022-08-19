import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form'

export default function Form(props) {

    const {register, handleSubmit, formState: {erros}} = useForm()
    const addpost = data => data console.log(data)
    // let navigate = useNavigate(); 
    // const submit = (e) =>{ 
    //     let path = `/user/${props.id}`; 
    //     navigate(path);
    // }
  return (
    <div className='edit_container'>
        <img src={`https://cdn.traction.one/pokedex/pokemon/${props.id}.png`}/>
        <form className='edit_form' onSubmit={handleSubmit(addpost)}>
            <textarea
                type="text"
                name="name"
                id="new-name"
                className="campo"
                placeholder="Novo nome"
            />
            <textarea
                type="username"
                name="username"
                id="new-username"
                className="campo"
                placeholder="Novo nome de usuario"
                {...register("username")}
            />
            <textarea
                type="text"
                name="text"
                id="new-bio"
                className="campo"
                placeholder="Nova bio"
                {...register("text")}
            />
            <button type="submit" value="salvar" className="botao_enviar" >
            Salvar
            </button>
        </form>
    </div>
  )
}
