import React, {useEffect, useRef, useState} from 'react';
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import c from './Create.module.scss'
import AboutButton from "../../components/AboutButton/AboutButton";

interface lAnswer {
  title: string,
  correct: boolean
}

interface lQuest {
  title: string,
  description: string,
  answers: Array<lAnswer>
}

interface lQuiz {
  title: string
  description: string
  quests: Array<lQuest>
}

const Create = () => {
  // хуки для создания массива с ответами
  const checkRef = useRef<HTMLInputElement>(null)
  const [inputCheckbox, setInputCheckbox] = useState<boolean>(false)
  const [inputAnswer, setInputAnswer] = useState<string>('')
  // хуки для создания вопросов
  const [inputTitleQuest, setInputTitleQuest] = useState<string>('')
  const [inputDescQuest, setInputDescQuest] = useState<string>('')
  const [answers, setAnswers] = useState<Array<lAnswer>>([])
  // хуки для создания квиза
  const [inputTitleQuiz, setInputTitleQuiz] = useState<string>('')
  const [inputDescQuiz, setInputDescQuiz] = useState<string>('')
  const [quests, setQuests] = useState<Array<lQuest>>()

  const [quiz, setQuiz] = useState<lQuiz>()

  useEffect(() => console.log('Ответы', answers), [answers])
  useEffect(() => console.log('Вопросы', quests), [quests])
  useEffect(() => console.log('Квиз', quiz), [quiz])

  const clickHandle = () => {
    setInputCheckbox(checkRef.current?.checked || false)
  }

  const clearAnswer = () => {
    if (checkRef.current)
      checkRef.current.checked = false
    setInputCheckbox(false)
    setInputAnswer('')
  }

  const clearQuest = () => {
    setInputTitleQuest('')
    setInputDescQuest('')
    clearAnswer()
    setAnswers([])
  }

  // const clearQuiz = () => {
  //   return
  // }

  const addAnswer = () => {
    setAnswers(prevState => [...prevState, {title: inputAnswer, correct: inputCheckbox}])
    clearAnswer()
  }

  const addQuest = () => {
    setQuests(prevState => prevState
      ? [...prevState, {title: inputTitleQuest, description: inputDescQuest, answers}]
      : [{title: inputTitleQuest, description: inputDescQuest, answers}])
    clearQuest()
  }

  const addQuiz = () => {
    if (quests) {
      setQuiz({title: inputTitleQuiz, description: inputDescQuiz, quests})
      setInputDescQuiz('')
      setInputDescQuiz('')
      clearQuest()
    }
  }

  return (
    <>
      <ButtonBack/>
      <AboutButton description={'Процесс создания...'} name={'Как создать?'}/>
      <div className={c.create}>
        <h1 className={c.head}>Создание квиза</h1>
        <div className={c.form}>
          <div className={c.quiz}>
            <input value={inputTitleQuiz} onChange={e => setInputTitleQuiz(e.target.value)} type="text"
                   placeholder={'Название квиза...'}/>
            <br/>
            <input value={inputDescQuiz} onChange={e => setInputDescQuiz(e.target.value)} type="text"
                   placeholder={'Описание квиза...'}/>
            <div className={c.quest}>
              <div className={c.quest_head}>
                <input value={inputTitleQuest} onChange={e => setInputTitleQuest(e.target.value)} type="text"
                       placeholder={'Название вопроса...'}/>
                <br/>
                <input value={inputDescQuest} onChange={e => setInputDescQuest(e.target.value)} type="text"
                       placeholder={'Описание вопроса...'}/>
              </div>
              <hr/>
              <div className={c.answers}>
                <div className={c.answerInputs}>
                  <input value={inputAnswer} onChange={(e) => setInputAnswer(e.target.value)} type="text"
                         placeholder={'Введите вариант ответа...'}/>
                  <label htmlFor="checkbox"
                         style={{color: inputCheckbox ? 'green' : 'red'}}>{inputCheckbox ? 'Правильный' : 'Неправильный'}</label>
                  <input onClick={clickHandle} ref={checkRef} id={'checkbox'} type="checkbox" hidden/>
                </div>
                <button className={c.addButton} onClick={addAnswer}>Добавить вариант ответа</button>
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