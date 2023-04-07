import React from 'react';
import c from './Background.module.scss'
import BackgroundItem from "../BackgroundItem/BackgroundItem";
const Background = () => {
  return (
      <>
    <div className={c.background}>
      {[...Array(20)].map((elem, i) => <BackgroundItem key={i} id={i}/>)}
    </div>
      </>
  );
};

export default Background;