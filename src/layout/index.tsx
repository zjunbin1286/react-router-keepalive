import { useLocation, Outlet } from 'react-router-dom'
import {useKeepOutlet} from '../keepalive'

export default function Layout() {
  const { pathname } = useLocation()
  const element = useKeepOutlet()

  return (
    <div>
      <div>当前路由: {pathname}</div>
      {element}
      {/* <Outlet/> */}
    </div>
  )
}
