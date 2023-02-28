import React, {FC} from 'react';
import c from './CompletePage.module.scss'
import completeImage from '../../assets/img/complete.gif'
import sadImage from '../../assets/img/sad1.gif'

const CompletePage:FC<{count:number, total:number}> = ({count, total}) => {
  const procent = count/total*100
  return (
    <div className={c.completePage}>
      <div className={c.image}>
        <img width={200} height={200} src={procent > 40 ? completeImage : sadImage} alt="complete"/>
      </div>
      <div className={c.text}>Отвечено правильно:</div>
      <div className={c.count}>{count} / {total}</div>
    </div>
  );
};

export default CompletePage;