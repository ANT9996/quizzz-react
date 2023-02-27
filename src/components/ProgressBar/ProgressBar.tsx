import React, {FC} from 'react';
import c from "./Progress.module.scss";

const ProgressBar:FC<{value:number, maxLength:number}> = ({value, maxLength}) => {
  const progressStatus = value/maxLength*100
  return (
    <div className={c.progressBar}>
      <div className={c.value}>{value}</div>
      <div className={c.progress} style={{width: `${progressStatus+10}%`}}/>
      <div className={c.max}>{maxLength}</div>
    </div>
  );
};

export default ProgressBar;