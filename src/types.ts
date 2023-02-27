export type Answer = {
  id?: number,
  title: string,
  correct: boolean,
  showCorrect: boolean,
  onClick: (correct:boolean) => void
}

export type Quest = {
  activeQuest?: number,
  id?: number,
  title: string,
  description: string,
  answers: Array<Answer>
}

export type Quiz = {
  id: string,
  title: string,
  description: string,
  quests: Array<Quest>
}