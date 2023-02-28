import React, {FC, useState} from 'react';
import {Answer as IAnswer} from "../../types";
import c from './Answer.module.scss'
import CorrectStatus from "../CorrectStatus/CorrectStatus";
import { motion } from 'framer-motion';
const Answer:FC<IAnswer> = ({id, title, correct, onClick, showCorrect, delay}) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const checkCorrect = () => {
    if (disabled) {
      console.log('disabled')
      return
    }
    setDisabled(true)
    if (correct) {
      console.log('its correct')
    } else {
      console.log('its not correct')
    }
    onClick(correct)
  }

  return (
    <motion.div onClick={checkCorrect} className={c.answer} initial={{opacity:0}} animate={{opacity:1}} transition={{delay}}>
      <div className={c.text}>
        <div className={c.index}>{(id || 0)+1}</div>
        <div className={c.title}>{title}</div>
      </div>
      <div className={`${c.correct} ${showCorrect ? c.show : ''}`}><CorrectStatus status={correct} show={showCorrect}/></div>
    </motion.div>
  );
};

export default Answer;