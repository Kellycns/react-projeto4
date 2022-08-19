import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Default } from '../templates'
import { Form } from '../molecules';

import axios from 'axios';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class Profile extends React.Component{

  state= {
    users: [],
  }


  async componentDidMount(){
 
    //Pega a userId da URL
    const { userId } = this.props.params
    console.log(userId)

    // const response = await api.get();

    //Pega o perfil do banco de dados com a respectiva id
    const response = await axios({
      method: 'get',
      url: `http://127.0.0.1:5000/api/post/${userId}`
    })

    this.setState({users: response.data});

    console.log(response.data);
  }

  render(){

    console.log(this.props)

    let { users } = this.state;
    
    //passa o objeto como array p/ poder usar a funcao map
    if(!Array.isArray(users)){
      users = [users]
    }
    console.log(users)


    return(
          <div>
            <Default/>
            <div className='edit'>
            {users.map(user => (<Form
              key={user.id}
              id={user.id}
            />))}

            </div>
        </div>
    );
  }
}
