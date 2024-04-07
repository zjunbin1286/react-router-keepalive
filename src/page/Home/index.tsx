import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>首页：{count}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>加一</button>
      </p>
      <Link to="/article" style={{ marginRight: 30 }}>
        去 article 页面（缓存）
      </Link>

      <Link to="/about">去 about 页面（不缓存）</Link>
    </div>
  )
}
