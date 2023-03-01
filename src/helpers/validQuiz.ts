import {ERROR_QUIZ_DESCRIPTION_LENGTH, ERROR_QUIZ_QUESTS_LENGTH, ERROR_QUIZ_TITLE_LENGTH} from "../constants";
import {lQuest} from "../pages/Create/Create";

export const validQuiz = (quests:Array<lQuest>, inputTitleQuiz:string, inputDescQuiz:string) => {
  if (quests?.length || 0 < 1) {
    alert(ERROR_QUIZ_QUESTS_LENGTH)
    return false
  }
  if (inputTitleQuiz.length <= 3) {
    alert(ERROR_QUIZ_TITLE_LENGTH)
    return false
  }
  if (inputDescQuiz.length <= 9) {
    alert(ERROR_QUIZ_DESCRIPTION_LENGTH)
    return false
  }
  console.log('Quiz is valid')
  return true
}