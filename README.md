# react-router-keepalive
🔥 基于 React Router 实现的 KeepAlive 缓存组件（KeepAlive caching component based on React Router implementation）

## 1. 场景
路由切换会销毁对应的组件，但很多场景我们希望路由切换组件不销毁，也就是 keepalive。

## 2. 实现
我们在 context 中保存所有需要 keepalive 的组件，然后渲染的时候全部渲染出来，通过路由是否匹配来切换显示隐藏。以实现 keepalive 的效果

该功能是依赖 React Router 的 `useLocation`、`useOutlet`、`matchPath` 等 api 实现

**核心原理：在 context 中保存所有需要 keepalive 的组件，全部渲染出来，通过路由是否匹配来切换对应组件的显示隐藏。**


## 3. 使用
在 `App.tsx` 中最外层包裹 `KeepAlive` 组件，并通过 keepPaths 属性传入想要缓存的组件地址
```tsx
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import KeepAlive from './keepalive'

function App() {
  return (
    <KeepAlive keepPaths={[/article/, '/']}>
      <RouterProvider router={router} />
    </KeepAlive>
  )
}
export default App
```
keepPaths 属性类型为数组，支持正则和字符串

上面表示缓存 `/article` 和 `/` 对应的组件数据 


然后在 `Layout` 组件中，使用 `useKeepOutlet` 返回的元素作为路由组件渲染出来
```tsx
import { useLocation } from 'react-router-dom'
import {useKeepOutlet} from '../keepalive'

export default function Layout() {
  const { pathname } = useLocation()
  const element = useKeepOutlet()
  return (
    <div>
      <div>当前路由: {pathname}</div>
      {element}
    </div>
  )
}
```

该示例路由配置如下
```tsx
const routes = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/article',
        element: <Article></Article>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]
```