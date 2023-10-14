import {create} from "zustand";
import {User} from "./types";
import axios from "./axios";
import {NotificationManager} from "react-notifications";
import {ADD_QUEST_SUCCESS} from "./constants";

interface Store {
  user: User | null
  setUser: () => void
  login: (params:{name:string, password:string}) => Promise<User>
  register: (params:{name:string, password:string}) => Promise<User>
  logout: () => void
}
export const useStore = create<Store>((set) => ({
    user: null,
    setUser: async () => {
      const {data} = await axios.get('/auth/me')
      set(() => ({user: data}))
      return data
    },
    login: async (params) => {
      const {data} = await axios.post('/auth/login', params)
      window.localStorage.setItem('token', data.token)
      set(() => ({user: data}))
      NotificationManager.success('Вы успешно авторизовались')
      return data
    },
    register: async (params) => {
      try {
        const response = await axios.post('/auth/user', params)
        window.localStorage.setItem('token', response.data.token)
        set(() => ({user: response.data}))
        NotificationManager.success('Вы успешно зарегистрировались')
        return response.data
      } catch (e) {
        NotificationManager.error('Не удалось зарегистрироваться')
      }
    },
    logout: () => {
      window.localStorage.removeItem('token')
      set(() => ({user: null}))
    }
}))