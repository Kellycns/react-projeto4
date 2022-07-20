import React from 'react'

import { Link } from 'react-router-dom';

import gato1 from '../../img/gato (1).jpg';
import gato2 from '../../img/gato (2).jpg'
import gato3 from '../../img/gato (3).jpg';
import gato4 from '../../img/gato (4).jpg';
import gato5 from '../../img/gato (5).jpg';
import gato6 from '../../img/gato (6).jpg';
import gato7 from '../../img/gato (7).jpg';
import gato8 from '../../img/gato (8).jpg';
import gato9 from '../../img/gato (9).png';

export default function UserPostItem(props) {
  return (
    <Link to={`/user/${props.userId}/edit`}>
    <div className="fotos_galeria">
        <img src={props.image}/>
    </div>
    </Link>

  )
}
