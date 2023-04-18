import React, {useEffect, useRef, useState} from 'react';
import {ButtonBack, AboutButton} from "../../components";
import {
  ADD_ANSWER_SUCCESS,
  ADD_QUEST_SUCCESS,
  ADD_QUIZ_SUCCESS,
  ANSWER_FALSE,
  ANSWER_TRUE,
  HOW_TO_CREATE_QUIZ_0,
  HOW_TO_CREATE_QUIZ_1,
  HOW_TO_CREATE_QUIZ_2,
  HOW_TO_CREATE_QUIZ_3,
  HOW_TO_CREATE_QUIZ_4,
  MOCK_URL
} from "../../constants";
import {validAnswer, validQuest, validQuiz} from "../../helpers";
import c from './Create.module.scss'
import axios from "axios";
import {NotificationManager} from 'react-notifications'
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {useStore} from "../../store";

export interface lAnswer {
  title: string,
  correct: boolean
}

export interface lQuest {
  title: string,
  description: string,
  answers: Array<lAnswer>
}

export interface lQuiz {
  author_id: string
  title: string
  description: string
  quests: Array<lQuest>
}

const Create = () => {
  const {user} = useStore()
  // хуки для создания массива с ответами
  const checkRef = useRef<HTMLInputElement>(null)
  const answerRef = useRef<HTMLInputElement>(null)
  const [inputCheckbox, setInputCheckbox] = useState<boolean>(false)
  const [inputAnswer, setInputAnswer] = useState<string>('')
  const [answerDisabled, setAnswerDisabled] = useState<boolean>(false)

  // хуки для создания вопросов
  const [inputTitleQuest, setInputTitleQuest] = useState<string>('')
  const [inputDescQuest, setInputDescQuest] = useState<string>('')
  const [answers, setAnswers] = useState<Array<lAnswer>>([])
  // хуки для создания квиза
  const [inputTitleQuiz, setInputTitleQuiz] = useState<string>('')
  const [inputDescQuiz, setInputDescQuiz] = useState<string>('')
  const [quests, setQuests] = useState<Array<lQuest>>([])

  const [quiz, setQuiz] = useState<lQuiz>()

  useEffect(() => console.log('Ответы', answers), [answers])
  useEffect(() => console.log('Вопросы', quests), [quests])
  useEffect(() => console.log('Квиз', quiz), [quiz])

  const clickHandle = () => {
    setInputCheckbox(checkRef.current?.checked || false)
  }

  const clearAnswer = () => {
    if (checkRef.current) checkRef.current.checked = false
    setInputCheckbox(false)
    setInputAnswer('')
  }

  const clearQuest = () => {
    setInputTitleQuest('')
    setInputDescQuest('')
    clearAnswer()
    setAnswers([])
  }

  const clearQuiz = () => {
    setInputTitleQuiz('')
    setInputDescQuiz('')
    clearQuest()
  }

  const addAnswer = async () => {
    if (!validAnswer(inputAnswer)) return
    setAnswerDisabled(true)
    await setAnswers(prevState => [...prevState, {title: inputAnswer, correct: inputCheckbox}])
    await clearAnswer()
    setAnswerDisabled(false)
    NotificationManager.success(ADD_ANSWER_SUCCESS)
    answerRef.current?.focus()
  }

  const addQuest = () => {
    if (!validQuest(answers, inputTitleQuest)) return
    setQuests(prevState => prevState
      ? [...prevState, {title: inputTitleQuest, description: inputDescQuest, answers}]
      : [{title: inputTitleQuest, description: inputDescQuest, answers}])
    NotificationManager.success(ADD_QUEST_SUCCESS)
    clearQuest()
  }

  const addQuiz = async () => {
    if (!validQuiz(quests, inputTitleQuiz, inputDescQuiz)) return
    if (quests && user) {
      const quiz = {
        author_id: user._id,
        author_name: user.name,
        title: inputTitleQuiz,
        description: inputDescQuiz,
        quests
      }

      setQuiz(quiz)
      await axios.post(MOCK_URL, quiz)
        .then(r => console.log(r))
        .catch(e => console.error(e))
      NotificationManager.success(ADD_QUIZ_SUCCESS)
      clearQuiz()
    }
  }
  const description = [HOW_TO_CREATE_QUIZ_0, HOW_TO_CREATE_QUIZ_1, HOW_TO_CREATE_QUIZ_2, HOW_TO_CREATE_QUIZ_3, HOW_TO_CREATE_QUIZ_4]
  return (
    <>
      <NavBar>
        <ButtonBack/>
        <AboutButton description={description} name={'Как создать?'}/>
        <ProfileCard/>
      </NavBar>
      <div className={c.create}>
        <h1 className={c.head}>Создание квиза</h1>
        <div className={c.form}>
          <div className={c.quiz}>
            <input value={inputTitleQuiz} onChange={e => setInputTitleQuiz(e.target.value)} type="text"
                   placeholder={'*Название квиза...'}/>
            <br/>
            <input value={inputDescQuiz} onChange={e => setInputDescQuiz(e.target.value)} type="text"
                   placeholder={'*Описание квиза...'}/>
            <div className={c.quest}>
              <div className={c.quest_head}>
                <input value={inputTitleQuest} onChange={e => setInputTitleQuest(e.target.value)} type="text"
                       placeholder={'*Название вопроса...'}/>
                <br/>
                <input value={inputDescQuest} onChange={e => setInputDescQuest(e.target.value)} type="text"
                       placeholder={'Описание вопроса...'}/>
              </div>
              <div className={c.answers}>
                <div className={c.answerInputs}>
                  <input value={inputAnswer} ref={answerRef} onChange={(e) => setInputAnswer(e.target.value)} type="text"
                         placeholder={'Введите вариант ответа...'}/>
                  <label htmlFor="checkbox"
                         style={{color: inputCheckbox ? 'green' : 'red'}}>{inputCheckbox ? ANSWER_TRUE : ANSWER_FALSE}</label>
                  <input onClick={clickHandle} ref={checkRef} id={'checkbox'} type="checkbox" hidden/>
                </div>
                <button className={c.addButton} disabled={answerDisabled} onClick={addAnswer}>Добавить вариант ответа</button>
              </div>
              <button className={c.addButton} onClick={addQuest}>добавить вопрос</button>
            </div>
            <button className={c.addButton} onClick={addQuiz}>закончить создание квиза</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Create;