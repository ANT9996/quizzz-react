export type Answer = {
  id?: number
  title: string
  correct: boolean
  showCorrect: boolean
  onClick: (correct:boolean) => void
  delay?: number
}

export type Quest = {
  activeQuest?: number
  id?: number
  title: string
  description: string
  answers: Array<Answer>
}

export type Quiz = {
  _id: string
  author_id: string
  title: string
  description: string
  quests: Array<Quest>
}

export type History = {
  _id:string
  nickname: string
  title:string
  description:string
  score:Array<number>
  date:string
  win:boolean
}

export type User = {
  _id: string
  name: string
}