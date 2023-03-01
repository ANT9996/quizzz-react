import {ERROR_ANSWER_LENGTH} from "../constants";

export const validAnswer = (inputAnswer:string) => {
  if (inputAnswer.length < 3) {
    alert(ERROR_ANSWER_LENGTH)
    return false
  }
  return true
}