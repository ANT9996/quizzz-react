import c from './MainMenu.module.scss'
import {Link} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {FC} from "react";
import {useStore} from "../../store";

const MainMenu:FC = () => {
  const {user} = useStore()

  return (
    <>
      <NavBar>
        <ProfileCard/>
      </NavBar>
      <h1 className={c.head}>Quiz<sup>z<sup>z</sup></sup></h1>
      <div className={c.menu}>
        <Link to={'/catalog'} className={c.menu_elem}>каталог</Link>
        <Link to={'/create'} className={`${c.menu_elem} ${user === null && c.disabled}`}>создать</Link>
        <Link to={'/help'} className={c.menu_elem}>помощь</Link>
        <Link to={'/history'} className={c.menu_elem}>история</Link>
      </div>
    </>
  )
}
export default MainMenu

