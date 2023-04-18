import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ButtonBack, ProgressBar, Quest, Answer, AboutButton} from "../../components";
import axios from "axios";
import {Quiz} from "../../types";
import c from './FullQuiz.module.scss'
import CompletePage from "../CompletePage/CompletePage";
import { MOCK_URL } from '../../constants';
import NavBar from "../../components/NavBar/NavBar";
const FullQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz>()
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [activeQuest, setActiveQuest] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showCorrect, setShowCorrect] = useState<boolean>(false)
  const {id} = useParams()
  const fetchFullQuiz = useCallback(async () => {
    setIsLoading(true)
    const res = await axios.get<Quiz>(MOCK_URL+id)
    console.log(res)
    setQuiz(res.data)
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
      <NavBar>
        <ButtonBack text={'Назад'} path={'/catalog'}/>
        <AboutButton description={quiz?.description || ''}/>
      </NavBar>
      {
        !isLoading
          ? <div>
            <div className={c.FullQuiz}>
              <div className={c.head}>
                <h1 className={c.title}>#{quiz?._id} {quiz?.title}</h1>
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
                : <CompletePage count={correctCount} total={quiz.quests.length} id={quiz._id} title={quiz.title}/>
              }
            </div>
          </div>
          : <h2>Loading...</h2>
      }


    </>
  );
};

export default FullQuiz;