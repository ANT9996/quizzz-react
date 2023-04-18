import c from "./HistoryItem.module.scss";
import winImg from '../../assets/img/complete.gif'
import loseImg from '../../assets/img/sad.gif'
import React, {FC} from "react";
import {History as IHistory} from "../../types";
import ShortDate from "../ShortDate";


const HistoryItem:FC<IHistory> = (props) => {

  return (
      <div className={c.listElem}>
        <div className={c.id}>{props._id}</div>
        <div className={c.nickname}>{props.nickname}</div>
        <div className={c.title}>{props.title}</div>
        <div className={c.score}><img src={props.win ? winImg : loseImg} alt=""/>({props.score[0]}/{props.score[1]})</div>
        <div className={c.date}>
          <ShortDate date={props.date} />
        </div>
      </div>
  )
}

export default HistoryItem