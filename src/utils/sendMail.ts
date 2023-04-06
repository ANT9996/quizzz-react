import emailjs from "@emailjs/browser"
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "./../constants"

type tMESSAGE = {
  email: string
  text: string
}

const sendMail = (params: tMESSAGE) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
}

export default sendMail
