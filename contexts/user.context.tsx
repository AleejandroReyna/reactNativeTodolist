import { createContext } from 'react'
import { User, UserContextProps } from '../services/user/user.interface'

export const initializeUser:UserContextProps = {
  user: null,
  addUser: (user: User) => {},
  clearUser: () => {}
}

export const UserContext = createContext(initializeUser)