import {FC, PropsWithChildren} from "react";
import c from './NavBar.module.scss'
const NavBar:FC<PropsWithChildren> = ({children}) => {
  return(
      <div className={c.NavBar}>
        {children}
      </div>
  )
}

export default NavBar