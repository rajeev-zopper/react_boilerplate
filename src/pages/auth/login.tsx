import React from 'react'
import { useLoginMutation } from '../../services/API/auth.api'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginInput } from '../../types/userAuth'

export const Login = () => {
  // react hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInput>()

  // services
  const [Login, { isLoading: loginLoading }] = useLoginMutation()

  const handleLogin: SubmitHandler<ILoginInput> = async (data) => {
    console.log('inputs', data)
    // { username: 'kminchelle', password: '0lelplR' }
    const res = await Login(data).unwrap()
    console.log('login response', res)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          placeholder='username'
          {...register('username', { required: 'username required', maxLength: 20 })}
        />
        {errors.username && <p color='red'>{errors.username?.message}</p>}
        <input
          type='password'
          placeholder='password'
          {...register('password', { required: 'password required', maxLength: 20 })}
        />
        {errors.password && <p color='red'>{errors.password?.message}</p>}
        <button type='submit'>{loginLoading ? 'loading...' : 'Login'}</button>
      </form>
    </div>
  )
}
