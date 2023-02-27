import c from './MainMenu.module.scss'
import {Link} from "react-router-dom";

const MainMenu = () => {

  return (
    <>
      <h1 className={c.head}>Quiz<sup>z<sup>z</sup></sup></h1>
      <div className={c.menu}>
        <Link to={'/catalog'} className={c.menu_elem}>каталог</Link>
        <Link to={'/rules'} className={c.menu_elem}>правила</Link>
        <Link to={'/create'} className={c.menu_elem}>создать</Link>
        <Link to={'/help'} className={c.menu_elem}>помощь</Link>
      </div>
    </>
  )
}
export default MainMenu
