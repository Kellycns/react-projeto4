import React from 'react'

import { AppHeader } from '../organisms';

export default function Default(props) {
  return (
    <div className="wrapper">
        <AppHeader/>
        {props.children}
    </div>
  );
}
