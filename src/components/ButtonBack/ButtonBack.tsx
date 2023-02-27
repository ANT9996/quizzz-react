import React from 'react';
import c from './ButtonBack.module.scss'
import {Link} from "react-router-dom";
import '../../styles/button_light.scss'

const ButtonBack = () => {
  return (
    <Link to={'/'}>
      <div className={`${c.back_light} button_light`}>назад</div>
    </Link>
  );
};

export default ButtonBack;