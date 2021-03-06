import Config from 'react-native-config'
import { User } from './user.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface LoginProps {
  username: string,
  password: string
}

export interface LoginResponse {
  status: number,
  errors?: string[],
  data?: User
}

export const loginService = async ({username, password}:LoginProps):Promise<LoginResponse> => {
  const request = await fetch(Config.API_LOGIN, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
  const response = await request.json()
  if(request.status === 200) {
    const user:User = {...response}
    AsyncStorage.setItem("username", `${user.username}`)
    AsyncStorage.setItem("refresh", `${user.refresh}`)
    return {status: request.status, data: user}
  }
  const errors:LoginResponse = {
    status: request.status,
    errors: ['errors here', 'other error']
  }
  return errors
}