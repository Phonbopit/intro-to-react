import { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect called')
    document.title = `Click ${count} times`
  }, [count])

  console.log('UseEffect render...')

  return (
    <div>
      <h1>UseEffect Example</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect
