import { FormEvent, useRef } from 'react'

const Form2 = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    const formData = {
      username,
      password,
    }

    console.log('Form2 -->', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" ref={usernameRef} />
      <input type="password" name="password" ref={passwordRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form2
