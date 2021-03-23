export interface User {
  username: string
}

export interface UserContextProps {
  user: User | undefined | null,
  addUser(user: User) : void,
  clearUser(): void
}