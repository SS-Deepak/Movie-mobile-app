import AuthContext from '@/context/auth-context/auth.context'
import LoginEmailScreen from '@/screens/login-screen/email'
import LoginPasswordScreen from '@/screens/login-screen/password'
import React, { useContext } from 'react'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [emailScreen, setEmailScreen] = React.useState(true)
  const { login } = useContext(AuthContext);

  const onEmailSuccess = (email: string) => {
    setEmail(email)
    setEmailScreen(false)
  }

  const onPasswordSuccess = (password: string) => {
    login({ email, password })
  }

  if (emailScreen) {
    return (
      <LoginEmailScreen onSuccess={onEmailSuccess} />
    )
  }

  return (
    <LoginPasswordScreen onSubmit={onPasswordSuccess} />
  )
}

export default Login