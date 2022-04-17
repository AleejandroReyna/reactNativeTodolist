import Config from 'react-native-config'
import { User } from './user.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface LoginProps {
  username: string,
  password: string
}

export interface LoginResponse {
  data: User
}

export const loginService = async ({username, password}:LoginProps) => {
  try {
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
      return { data: user }
    } else {
      throw response
    }
  } catch(e) {
    throw e
  }  
}