import React, {FC, useEffect} from 'react';
import c from './CompletePage.module.scss'
import completeImage from '../../assets/img/complete.gif'
import sadImage from '../../assets/img/sad1.gif'
import axios from "axios";
import {MOCK_URL_HISTORY} from "../../constants";
import {Link} from "react-router-dom";

interface Complete {
  count:number
  total:number
  id:string
  title:string
}

const CompletePage:FC<Complete> = (p) => {
  const percent = p.count/p.total*100

  const saveResult = async () => {
    const elem = {
      title: p.title,
      score: [p.count, p.total],
      date: new Date(),
      win: percent > 40,
    }
    return await axios.post(MOCK_URL_HISTORY, elem)
  }
  useEffect(() => {
    saveResult().then((r) => {
      console.log(r)
    })
  }, [])
  return (
    <div className={c.completePage}>
      <div className={c.image}>
        <img width={200} height={200} src={percent > 40 ? completeImage : sadImage} alt="complete"/>
      </div>
      <div className={c.text}>Отвечено правильно:</div>
      <div className={c.count}>{p.count} / {p.total}</div>
      <div className={c.info}>Результат находится на странице <Link to={'/history'}>ИСТОРИИ</Link></div>
    </div>
  );
};

export default CompletePage;