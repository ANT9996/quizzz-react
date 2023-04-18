import React, {FC, useState, useEffect, useRef} from "react";
import {useStore} from "../../store";
import useInput from "../../hooks/useInput";
import c from './AuthPage.module.scss'
import {ButtonBack} from "../../components";
import {useNavigate} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const AuthPage:FC = () => {

  const {login, register, user} = useStore()
  const navigate = useNavigate()
  const name = useInput()
  const password = useInput()
  const [valid, setValid] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const firstCall = useRef(true)

  useEffect(() => {
      if (name.value.length > 2 && password.value.length > 5) {
        setValid(true)
      } else {
        setValid(false)
      }
  }, [name.value, password.value])

  const onLogin = async () => {
    setClicked(true)
    await login({name: name.value, password: password.value})
        .then(r => {console.log(r)})
        .catch(e => {
          console.warn(e);
          setErrorText(e.response.data.message || 'Неизвестная ошибка')
        })
        .finally(() => {
          setClicked(false)
        })

  }
  const onRegister = async () => {
    setClicked(true)
    await register({name: name.value, password: password.value})
    setClicked(false)
  }

  useEffect(() => {
    if (firstCall.current) {
      firstCall.current = false
      return
    }
    navigate('/')
  }, [user])

  return(
      <>
        <NavBar>
          <ButtonBack/>
        </NavBar>
        <div className={c.AuthPage}>
          <h1 className={c.head}>Авторизация / Регистрация</h1>
          <div className={c.form}>
            <input type="text" {...name} placeholder={'NAME'} className={c.input} autoFocus/>
            <input type="password" {...password} placeholder={'PASSWORD'} className={c.input}/>
            <div className={c.buttons}>
              <button className={`${c.button} ${!valid || clicked && c.disabled}`} onClick={onLogin} disabled={!valid || clicked}>Войти</button>
              <button className={`${c.button} ${!valid || clicked && c.disabled}`} onClick={onRegister} disabled={!valid || clicked}>Зарегистрироваться</button>
            </div>
              <div style={{color: 'red'}}>{errorText}</div>
          </div>
        </div>
      </>
  )
}

export default AuthPage