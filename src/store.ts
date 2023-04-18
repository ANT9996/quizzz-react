import {create} from "zustand";
import {User} from "./types";
import axios from "./axios";

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
      return data
    },
    register: async (params) => {
    const {data} = await axios.post('/auth/user', params)
      window.localStorage.setItem('token', data.token)
      set(() => ({user: data}))
      return data
    },
    logout: () => {
      window.localStorage.removeItem('token')
      set(() => ({user: null}))
    }
}))