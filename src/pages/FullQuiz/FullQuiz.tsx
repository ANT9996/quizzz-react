import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ButtonBack, ProgressBar, Quest, Answer, AboutButton} from "../../components";
import axios from "axios";
import {Quiz} from "../../types";
import c from './FullQuiz.module.scss'
import CompletePage from "../CompletePage/CompletePage";

const FullQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz>()
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [activeQuest, setActiveQuest] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showCorrect, setShowCorrect] = useState<boolean>(false)
  const {id} = useParams()
  const fetchFullQuiz = useCallback(async () => {
    setIsLoading(true)
    const {data} = await axios.get<Quiz>('https://63e7d8a5ac3920ad5be4f661.mockapi.io/Quizs/' + id)
    setQuiz(data)
    setIsLoading(false)
  },[id])

  const onClick = async (correct: boolean) => {
    if (correct) setCorrectCount(correctCount+1)
    setShowCorrect(true)
    setTimeout(() => {
      setActiveQuest(activeQuest + 1)
      setShowCorrect(false)
    }, 1500)
  }
  useEffect(() => {
    fetchFullQuiz()
  }, [fetchFullQuiz])
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
                  <Quest key={i} {...elem} id={i} activeQuest={activeQuest}>
                    {elem.answers.map((answer, i) =>
                      <Answer key={i} title={answer.title} correct={answer.correct} showCorrect={showCorrect} id={i} delay={i/10}
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