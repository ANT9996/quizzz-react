import {ERROR_QUIZ_DESCRIPTION_LENGTH, ERROR_QUIZ_QUESTS_LENGTH, ERROR_QUIZ_TITLE_LENGTH} from "../constants";
import {lQuest} from "../pages/Create/Create";
import {NotificationManager} from 'react-notifications'
export const validQuiz = (quests:Array<lQuest>, inputTitleQuiz:string, inputDescQuiz:string) => {
  if (quests?.length < 1) {
    NotificationManager.error(ERROR_QUIZ_QUESTS_LENGTH)
    // alert(ERROR_QUIZ_QUESTS_LENGTH)
    return false
  }
  if (inputTitleQuiz.length <= 3) {
    NotificationManager.error(ERROR_QUIZ_TITLE_LENGTH)
    // alert(ERROR_QUIZ_TITLE_LENGTH)
    return false
  }
  if (inputDescQuiz.length <= 9) {
    NotificationManager.error(ERROR_QUIZ_DESCRIPTION_LENGTH)
    // alert(ERROR_QUIZ_DESCRIPTION_LENGTH)
    return false
  }
  console.log('Quiz is valid')
  return true
}