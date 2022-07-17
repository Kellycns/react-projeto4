import React from 'react';
import { Link } from 'react-router-dom';

import { Default } from '../templates';

import gato1 from '../../img/gato (1).jpg';
import gato2 from '../../img/gato (2).jpg'
import gato3 from '../../img/gato (3).jpg';
import gato4 from '../../img/gato (4).jpg';
import gato5 from '../../img/gato (5).jpg';
import gato6 from '../../img/gato (6).jpg';
import gato7 from '../../img/gato (7).jpg';
import gato8 from '../../img/gato (8).jpg';
import gato9 from '../../img/gato (9).png';
import perfil from '../../img/perfil.jpg';
import config from '../../img/icones/configuracoes.png';

export default function Profile() {
  return (
    <div className="body" >
        <Default/>

        <main className="conteudo">
            <div className='conteudo_container'>
                <section className="detalhes" aria-label="informações do perfil">
                    <figure className="detalhes_foto" aria-label="imagem de perfil">
                        <img src={perfil}/>
                    </figure>
                    <div className="detalhes_info">
                        <div className="detalhes_info_container">
                            <div className="detalhes_info_nome">
                                <h2 className="nome_perfil" aria-label="nome de usuáro">FelinoDeTal</h2> 
                                <div className="detalhes_botoes">
                                    <input type="button" value="Editar perfil" className="botao"/>
                                    <Link to=""><img src={config} alt="configurações" className="configuracoes"/></Link>
                                </div>
                                <ul className="detalhes_info_numeros">
                                    <li><span>23</span>Publicações</li>
                                    <li><span>3.107</span>Seguidores</li>
                                    <li><span>1.998</span>Seguindo</li>
                                </ul>
                                <div className="detalhes_info_bio">
                                    <h2 aria-label="nome">Felino De Tal</h2>
                                    <p aria-label="bio">Uma pequena bio sobre um pet bem legal<br/>
                                        Curte passear<br/>
                                        Ama caixas<br/>
                                        Desbrava o quintal
                                    </p>   
                                </div>
                            </div>      
                        </div>
                    </div>
                </section>
                <section className="fotos" aria-label="postagens">
                    <div className="fotos_galeria">
                        <img src={gato6}/>
                        <img src={gato5}/>
                        <img src={gato4}/>
                        <img src={gato3}/>
                        <img src={gato2}/>
                        <img src={gato1}/>
                        <img src={gato7}/>
                        <img src={gato8}/>
                        <img src={gato9}/>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}