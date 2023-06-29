import { useEffect, useState } from 'react'
import axios from 'axios'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const FetchAPI2 = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true)
      const res = await axios.get(url)
      setPosts(res.data)
    } catch (error: any) {
      setError(error.response?.data?.message || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetchData(url)
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Fetch API Example</h1>

      <h3>Users</h3>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchAPI2
