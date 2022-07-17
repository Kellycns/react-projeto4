import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="login">
      <div className="containerLogin">
        <h2>Login</h2>
        <form>
          <input type="email" id="emailField2" placeholder="E-mail" />
          <input type="password" id="passwordField2" placeholder="Senha" />
          <button type="submit">ENTRAR</button>
        </form>

        <Link to={"/user"}>
            <h3>Criar uma conta</h3>
        </Link>
      </div>
    </section>
  );
}