import React from 'react';
import { useParams } from 'react-router-dom';

import { Default } from '../templates';
import { UserBio, UserPosts } from '../molecules';

export default function Profile() {
    const {userId} = useParams();
    
    const [user, setUser] = React.useState({
        avatar:"",
        bio:"",
        fn:"",
        ln:"",
        userName:""
    })

    React.useEffect(() => {
        fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json())
        .then(data => {
          setUser(data[0].userData);
        });
      }, []);

  return (
    <div className="body" >
        <Default/>

        <main className="conteudo">
            <div className='conteudo_container'>
                <UserBio avatar={user.avatar} bio={user.bio} name={`${user.fn} ${user.ln}`} username={user.userName}/>
                <UserPosts/>
            </div>
        </main>
    </div>
  )
}