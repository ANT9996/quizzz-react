import {ERROR_QUEST_ANSWERS_HAS_CORRECT, ERROR_QUEST_ANSWERS_LENGTH, ERROR_QUEST_TITLE_LENGTH} from "../constants";
import {lAnswer} from "../pages/Create/Create";

export const validQuest = (answers:Array<lAnswer>, inputTitleQuest:string) => {
  if (answers.length <= 1) {
    alert(ERROR_QUEST_ANSWERS_LENGTH)
    return false
  }
  const valid = answers.filter(elem => elem.correct)
  if (valid.length < 1) {
    alert(ERROR_QUEST_ANSWERS_HAS_CORRECT)
    return false
  }
  if (inputTitleQuest.length <= 3) {
    alert(ERROR_QUEST_TITLE_LENGTH)
    return false
  }
  console.log('Quest is valid')
  return true
}