interface ILoginInput {
  username: string
  password: string
}

interface ILoginResponse {
  id: number
  username: strinh
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export type { ILoginInput, ILoginResponse }
