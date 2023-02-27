import React, {FC} from 'react';
import {Answer as IAnswer} from "../../types";
import c from './Answer.module.scss'
import CorrectStatus from "../CorrectStatus/CorrectStatus";
import { motion } from 'framer-motion';
const Answer:FC<IAnswer> = ({title, correct, onClick, showCorrect, delay}) => {
  const checkCorrect = () => {
    if (correct) {
      console.log('its correct')
    } else {
      console.log('its not correct')
    }
    onClick(correct)
  }

  return (
    <motion.div onClick={checkCorrect} className={`${c.answer}`} initial={{opacity:0}} animate={{opacity:1}} transition={{delay}}>
      <div className={c.text}>{title}</div>
      <div className={`${c.correct} ${showCorrect ? c.show : ''}`}><CorrectStatus status={correct} show={showCorrect}/></div>
    </motion.div>
  );
};

export default Answer;