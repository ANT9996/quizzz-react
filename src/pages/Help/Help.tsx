import React, { useState } from "react"
import ButtonBack from "../../components/ButtonBack/ButtonBack"
import c from "./Help.module.scss"
import sendMail from "./../../utils/sendMail"
import { NotificationManager } from "react-notifications"
import { SEND_SUCCESS, SEND_ERROR } from "../../constants"

const Help = () => {
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [disableFields, setDisableFields] = useState(false)

  const valid = () => {
    const validEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if (!validEmail) {
      return false
    }
    if (text.length < 15) {
      return false
    }
    return true
  }

  const onSubmit = () => {
    setDisableFields(true)
    const params = {
      email,
      text,
    }
    sendMail(params)
      .then((r) => {
        console.log(r)
        setEmail("")
        setText("")
        NotificationManager.success(SEND_SUCCESS)
      })
      .catch((err) => {
        console.log(err)
        NotificationManager.error(SEND_ERROR)
      })
      .finally(() => setDisableFields(false))
  }

  return (
    <div className={c.form_block}>
      <ButtonBack />
      <div className={c.form}>
        <h3>Напишите что-нибудь...</h3>
        <div className={c.inputEmail}>
          <input
            type="text"
            placeholder={"*E-mail"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={disableFields}
          />
        </div>
        <div className={c.textarea}>
          <textarea
            placeholder={"*Текст (от 15 символов)"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={disableFields}
          ></textarea>
        </div>

        <button disabled={!valid() || disableFields} onClick={onSubmit}>
          Отправить
        </button>
      </div>
    </div>
  )
}

export default Help
