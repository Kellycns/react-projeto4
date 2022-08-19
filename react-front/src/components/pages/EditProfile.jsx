import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Default } from '../templates'
import { AppLoading } from '../organisms';

export default function EditProfile() {
    const [isLoading, setIsLoading] = React.useState(true);
    const {userId} =useParams();

    const [user, setUser] = React.useState([null]);

      React.useEffect(() => {
        fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json())
        .then(data => {
          setUser(data[0].userData);
          setIsLoading(false);
        });
      }, []);

      let navigate = useNavigate(); 
      const routeChange = () =>{ 
        let path = `/user/${userId}`; 
        navigate(path);
      }
    return isLoading ? (
        <AppLoading/>
        ) : (
        <div>
            <Default/>
            <div className='edit'>
                <div className='edit_container'>
                    <img src={`https://cdn.traction.one/pokedex/pokemon/${userId}.png`}/>
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
                        <button type="submit" value="salvar" className="botao_enviar" onClick={routeChange}>
                        Salvar
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}
