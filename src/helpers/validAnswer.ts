import {ERROR_ANSWER_LENGTH} from "../constants";
import {NotificationManager} from 'react-notifications'
export const validAnswer = (inputAnswer:string) => {
  if (inputAnswer.length < 3) {
    NotificationManager.error(ERROR_ANSWER_LENGTH)
    // alert(ERROR_ANSWER_LENGTH)
    return false
  }
  return true
}