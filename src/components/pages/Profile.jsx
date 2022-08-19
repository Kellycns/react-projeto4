import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import { Default } from '../templates';
import { UserBio, UserPosts } from '../molecules';
import { AppLoading } from '../organisms';
import api from '../../api';

class Profile extends Component{

  state= {
    users: [],
  }

  async componentDidMount(){
    const response = await api.get();

    this.setState({users: response.data});

    console.log(response.data);
  }

  render(){

    const { users } = this.state;
    return(
    <div className="body" >
        <Default/>

        <main className="conteudo">
            <div className='conteudo_container'>
              {users.map(user => (<UserBio
                key={user.id}
                id={user.id}
                bio={user.text}
                name={user.username}
              />))}
                {/*<UserPosts posts={posts}/>*/}
            </div>
        </main>
    </div>
    );
  }
}

// function Profile() {

    // const {id} = useParams();
    // const [isLoading, setIsLoading] = React.useState(true);

    // const [posts, setPosts] = React.useState([]);
    // const [user, setUser] = React.useState([]);

    // React.useEffect(() => {
    //     fetch(`http://127.0.0.1:5000/api/post/${id}`
    //     ).then((response) => response.json())
    //     .then(data => {
    //       setUser(data);
    //       setIsLoading(false);
    //     });
    //   }, []);

//       return (
//     <div className="body" >
//         <Default/>

//         <main className="conteudo">
//             <div className='conteudo_container'>
//                 <UserBio /> {/* avatar={id} bio={user.text} name={user.username} username={user.username}  */}
//                 {/*<UserPosts posts={posts}/>*/}
//             </div>
//         </main>
//     </div>
//   )
// }
export default Profile;