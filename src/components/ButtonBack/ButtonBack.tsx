import React, {FC} from 'react';
import c from './ButtonBack.module.scss'
import {Link} from "react-router-dom";
import '../../styles/button_light.scss'

interface Button {
  text?:string
  path?:string
}
const ButtonBack:FC<Button> = (p) => {
  return (
    <Link to={p.path ? p.path : '/'}>
      <div className={`${c.back_light} button_light`}>{p.text ? p.text : 'в главное меню'}</div>
    </Link>
  );
};

export default ButtonBack;