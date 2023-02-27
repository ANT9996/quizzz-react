import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import axios from "axios";
import {Quiz} from "../../types";
import Quest from "../../components/Quest/Quest";
import Answer from "../../components/Answer/Answer";
import c from './FullQuiz.module.scss'
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import AboutButton from "../../components/AboutButton/AboutButton";
import CompletePage from "../CompletePage/CompletePage";

const FullQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz>()
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [activeQuest, setActiveQuest] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showCorrect, setShowCorrect] = useState<boolean>(false)
  const {id} = useParams()
  const fetchFullQuiz = async () => {
    setIsLoading(true)
    const {data} = await axios.get<Quiz>('https://63e7d8a5ac3920ad5be4f661.mockapi.io/Quizs/' + id)
    setQuiz(data)
    setIsLoading(false)
  }

  const onClick = (correct: boolean) => {
    if (correct) setCorrectCount(correctCount+1)
    setShowCorrect(true)

    setTimeout(() => {
      setActiveQuest(activeQuest + 1)
      setShowCorrect(false)
    }, 3000)
  }
  useEffect(() => {
    fetchFullQuiz()
  }, [])
  return (
    <>
      <ButtonBack/>
      <AboutButton description={quiz?.description || ''}/>
      {
        !isLoading
          ? <div>
            <div className={c.FullQuiz}>
              <div className={c.head}>
                <h1 className={c.title}>#{quiz?.id} {quiz?.title}</h1>
              </div>
              <ProgressBar value={activeQuest} maxLength={(quiz?.quests?.length || 0)}/>
            </div>
            <div className={c.body}>
              {activeQuest !== (quiz?.quests?.length)
                ? quiz?.quests.map((elem, i) =>
                  <Quest {...elem} id={i} activeQuest={activeQuest}>
                    {elem.answers.map((answer, i) =>
                      <Answer title={answer.title} correct={answer.correct} showCorrect={showCorrect} id={i}
                              onClick={(correct)=>onClick(correct)}/>)}
                  </Quest>)
                : <CompletePage count={correctCount} total={quiz?.quests?.length}/>
              }
            </div>
          </div>
          : <h2>Loading...</h2>
      }


    </>
  );
};

export default FullQuiz;