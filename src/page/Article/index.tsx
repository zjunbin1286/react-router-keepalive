import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function article() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Article 页面：{count}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>加一</button>
      </p>
      <Link to="/">去首页</Link>
    </div>
  )
}
