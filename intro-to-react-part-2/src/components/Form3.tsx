import { ChangeEvent, FormEvent, useState } from 'react'

const Form3 = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      username,
      password,
    }

    console.log('Form3 -->', formData)
  }

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChangeUsername} />
      <input type="password" name="password" onChange={handleChangePassword} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form3
