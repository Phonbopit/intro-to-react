import { FormEvent } from 'react'

const Form1 = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.currentTarget

    const formData = {
      username: target.username.value,
      password: target.password.value,
    }

    console.log('Form1 -->', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form1
