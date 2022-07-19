import React from 'react'

import { Link } from 'react-router-dom';


export default function registration() {
  return (
    <div className="quadro">
        <section className="informacoes">
        <h1 className="logo">meuPet</h1>
        <p className="textInicial">
            Cadastre-se para ver fotos e vídeos de Pets fofinhos.
        </p>
        <form className="cadastro">
            <input
            type="text"
            name="Nome do Pet"
            id="nameField"
            className="campo"
            placeholder="Nome do Pet"
            required
            /><br />
            <select name="pet" className="campo" id="selecao">
            <option selected>Tipo de Pet</option>
            <option value="gato">Gato</option>
            <option value="cachorro">Cachorro</option>
            <option value="outro">Outro</option></select
            ><br />
            <input
            type="email"
            name="Email ou Número"
            id="emailField"
            className="campo"
            placeholder="Email"
            required
            /><br />
            <input
            type="text"
            name="username"
            id="userField"
            className="campo"
            placeholder="Username"
            required
            /><br />
            <input
            type="password"
            name="Senha"
            id="passwordField"
            className="campo"
            placeholder="Senha"
            required
            /><br />
            <button type="submit" value="cadastrar-se" className="botao_enviar">
            Criar conta
            </button>
        </form>
        <p className="politica">
            Ao se cadastrar, você concorda com nossos <Link to="">Termos</Link> ,
            <Link to="">Política de Dados</Link> e <Link to="">Política de Cookies</Link>.
        </p>
        </section>
        <section className="conectar">
        <p>Tem uma conta? <Link to={"/"}>Conecte-se</Link></p>
        </section>
    </div>
  );
}
