import React, {FC} from 'react';
import {Answer as IAnswer} from "../../types";
import c from './Answer.module.scss'
import CorrectStatus from "../CorrectStatus/CorrectStatus";
const Answer:FC<IAnswer> = ({title, correct, onClick, showCorrect}) => {
  const checkCorrect = () => {
    if (correct) {
      console.log('its correct')
    } else {
      console.log('its not correct')
    }
    onClick(correct)
  }

  return (
    <div onClick={checkCorrect} className={`${c.answer}`}>
      <div className={c.text}>{title}</div>
      <div className={`${c.correct} ${showCorrect ? c.show : ''}`}><CorrectStatus status={correct} show={showCorrect}/></div>
    </div>
  );
};

export default Answer;