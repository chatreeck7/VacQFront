export interface User {
  name: string 
  email: string
  password: string
  role: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string | null
}

export interface RootState {
  auth: AuthState
}
