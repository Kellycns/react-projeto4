import React from 'react';
import { useParams } from 'react-router-dom';

import { Default } from '../templates';
import { UserBio, UserPosts } from '../molecules';
import { AppLoading } from '../organisms';

export default function Profile() {

    const {userId} = useParams();
    const [isLoading, setIsLoading] = React.useState(true);

    const [posts, setPosts] = React.useState([]);
    const [user, setUser] = React.useState([null]);

    React.useEffect(() => {
        fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json())
        .then(data => {
          setUser(data[0].userData);
          setPosts(data);
          setIsLoading(false);
        });
      }, []);

      return isLoading ? (
        <AppLoading/>
        ) : (
    <div className="body" >
        <Default/>

        <main className="conteudo">
            <div className='conteudo_container'>
                <UserBio avatar={user.avatar} bio={user.bio} name={`${user.fn} ${user.ln}`} username={user.userName} />
                <UserPosts posts={posts}/>
            </div>
        </main>
    </div>
  )
}