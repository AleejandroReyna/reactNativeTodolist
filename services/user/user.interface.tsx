export interface User {
  username: string,
  refresh: string | null,
  access: string | null
}

export interface UserContextProps {
  user: User | undefined | null,
  addUser(user: User) : void,
  clearUser(): void
}