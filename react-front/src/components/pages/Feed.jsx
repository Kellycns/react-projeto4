import React from 'react'
import { Link } from 'react-router-dom';

import { Default } from '../templates';

export default function Feed() {
  return (
<body>
        <Default/>

        <main id="feedMain">

            {/*Formato template de posts simples*/}

            {/*POST 1*/}
            <div className="post" aria-label="postagem">
                <div className="postTop">
                    <Link to={"perfil.html"} aria-label="autor do post">
                        <img src="img/perfil.jpg" alt="perfil" className="icone_post"/>
                    </Link>
                    <Link><h3>FelinoDeTal</h3></Link>
                </div>
                <div className="postLoc">
                    <Link><i className="fa-solid fa-location-dot"></i></Link>
                    <Link to="#" aria-label="localização"><span>Localização</span></Link>
                </div>
                <div className="postPic" aria-label="conteúdo do post">
                    <img src="img/gato (6).jpg"/>
                </div>
                <div className="postItens" aria-label="interagir">
                    <Link to="" aria-label="curtir"><i className="fa-solid fa-heart"></i></Link>
                    <Link to="" aria-label="comentar"><i className="fa-solid fa-comment"></i></Link>
                    <Link to="" aria-label="compartilhar"><i className="fa-solid fa-share"></i></Link>
                    <div className="iten-save">
                        <Link to="" aria-label="salvar post"><i className="fa-solid fa-bookmark"></i></Link>
                    </div>
                </div>
                <div className="postStats" aria-label="estatísticas da postagem">
                    <h3>Curtido por .....</h3>
                    <Link to=""><h4>Ver todos os N comentários</h4></Link>
                    <h5>HÁ .... HORAS</h5>
                </div>
            </div>

            {/*POST 2 */}
            <div className="post" aria-label="postagem">
                <div className="postTop">
                    <Link to="" aria-label="autor do post">
                        <img src="img/mr-bubz.jpg" alt="perfil" className="icone_post"/>
                    </Link>
                    <Link><h3>Mr Bubz</h3></Link>
                </div>
                <div className="postLoc">
                    <Link><i className="fa-solid fa-location-dot"></i></Link>
                    <Link to="#" aria-label="localização"><span>Localização</span></Link>
                </div>
                <div className="postPic" aria-label="conteúdo do post">
                    <img src="img/mr-bubz.jpg"/>
                </div>
                <div className="postItens" aria-label="interagir">
                    <Link to="" aria-label="curtir"><i className="fa-solid fa-heart"></i></Link>
                    <Link to="" aria-label="comentar"><i className="fa-solid fa-comment"></i></Link>
                    <Link to="" aria-label="compartilhar"><i className="fa-solid fa-share"></i></Link>
                    <div className="iten-save">
                        <Link to="" aria-label="salvar post"><i className="fa-solid fa-bookmark"></i></Link>
                    </div>
                </div>
                <div className="postStats" aria-label="estatísticas da postagem">
                    <h3>Curtido por .....</h3>
                    <Link to=""><h4>Ver todos os N comentários</h4></Link>
                    <h5>HÁ .... HORAS</h5>
                </div>
            </div>

            {/*POST 3*/}
            <div className="post" aria-label="postagem">
                <div className="postTop">
                    <Link to="" aria-label="autor do post">
                        <img src="img/vet.jpg" alt="perfil" className="icone_post"/>
                    </Link>
                    <Link><h3>username</h3></Link>
                </div>
                <div className="postLoc">
                    <Link><i className="fa-solid fa-location-dot"></i></Link>
                    <Link to="#" aria-label="localização"><span>Localização</span></Link>
                </div>
                <div className="postPic" aria-label="conteúdo do post">
                    <img src="img/vet.jpg"/>
                </div>
                <div className="postItens" aria-label="interagir">
                    <Link to="" aria-label="curtir"><i className="fa-solid fa-heart"></i></Link>
                    <Link to="" aria-label="comentar"><i className="fa-solid fa-comment"></i></Link>
                    <Link to="" aria-label="compartilhar"><i className="fa-solid fa-share"></i></Link>
                    <div className="iten-save">
                        <Link to="" aria-label="salvar post"><i className="fa-solid fa-bookmark"></i></Link>
                    </div>
                </div>
                <div className="postStats" aria-label="estatísticas da postagem">
                    <h3>Curtido por .....</h3>
                    <Link to=""><h4>Ver todos os N comentários</h4></Link>
                    <h5>HÁ .... HORAS</h5>
                </div>
            </div>

            
            
            {/*Post com carretel*/}
            {/*vou fazer*/}



        </main>
    </body>
  )
}
