import {FC, useState} from "react";
import c from './ProfileCard.module.scss'
import {useStore} from "../../store";
import profileIcon from '../../assets/img/profile.svg'
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const ProfileCard:FC = () => {
  const {user, logout} = useStore()
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const anim = {
    style: {opacity: 0, height: 0, overflow: 'hidden'},
    animate: {opacity: .5, height: '100%'},
    transition: {delay: 0, duration: .1}
  }

  const onClickLogout = () => {
    navigate('/')
    logout()
  }
  const redirect = () => {
    navigate('/auth')
  }
  if (user !== null) {
    return (
        <div className={c.ProfileCard} onClick={() => setToggle(!toggle)}>
          <img src={profileIcon} alt=""/>
          <span>{user?.name}</span>
          {
              toggle &&
              <motion.div className={c.menu} {...anim} onClick={onClickLogout}>
                  <div className={c.exit}>Выход</div>
              </motion.div>
          }
        </div>
    )
  } else {
    return (
        <div className={c.ProfileCard} onClick={redirect}>
          <img src={profileIcon} alt=""/>
          <span>Войти</span>
        </div>
    )
  }
}

export default ProfileCard