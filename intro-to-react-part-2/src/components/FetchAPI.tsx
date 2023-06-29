import { useEffect, useState } from 'react'
import axios from 'axios'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const FetchAPI = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchData = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    // หรือ axios
    // const res = await axios.get(url)
    // setPosts(res.data)

    console.log('fetch async -->', data)
    setPosts(data)
  }

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('fetch data -->', data)
    //     setPosts(data)
    //   })

    // axios.get(url).then((res) => {
    //   console.log('axios res -->', res)
    //   setPosts(res.data)
    // })

    fetchData(url)
  }, [])

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

export default FetchAPI
