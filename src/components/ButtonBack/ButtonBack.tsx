import React from 'react';
import c from './ButtonBack.module.scss'
import {Link} from "react-router-dom";

const ButtonBack = () => {
  return (
    <Link to={'/'}>
      <div className={c.back}>
        <div className={c.icon}/>
        <div className={c.text}>назад</div>
      </div>
    </Link>
  );
};

export default ButtonBack;